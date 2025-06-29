<template>
  <div class="sticker-container" :style="{ background: backgroundStyle }">
    <div v-if="title" class="sticker-header">
      <h2>{{ title }}</h2>
      <p v-if="desc">{{ desc }}</p>
    </div>

    <div class="controls-section">
      <div class="page-size-selector">
        <span>每页数量：</span>
        <input
          type="number"
          v-model.number="localPageSize"
          min="1"
          max="200"
          @change="validatePageSize"
        >
      </div>

      <div class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
        <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
      </div>
    </div>

    <div v-if="loading" class="loading">加载表情包配置中...</div>

    <div v-else-if="stickers.length === 0" class="empty-message">
      <template v-if="configError">
        {{ configError }}
      </template>
      <template v-else>
        没有找到表情包，请检查配置文件
      </template>
    </div>

    <div v-else class="sticker-grid">
      <div v-for="(sticker, index) in paginatedStickers" :key="index" class="sticker-item">
        <div class="sticker-checkbox">
          <input
            type="checkbox"
            v-model="selectedStickers"
            :value="sticker"
            @change="updateSelectAll"
          >
        </div>
        <div class="sticker-img-container">
          <img
            :src="getStickerUrl(sticker.url)"
            :alt="sticker.name || '表情包'"
            loading="lazy"
            @error="handleImageError(sticker)"
          />
          <div v-if="sticker.error" class="image-error-tip">加载失败</div>
        </div>
        <div v-if="showname && sticker.name" class="sticker-name">
          {{ sticker.name }}
        </div>
      </div>
    </div>

    <div v-if="stickers.length > 0" class="download-section">
      <div class="select-controls">
        <label>
          <input
            type="checkbox"
            v-model="selectAll"
            @change="toggleSelectAll"
          > 全选当前页
        </label>
        <span class="selected-count">已选 {{ selectedStickers.length }} 个</span>

        <select v-model="downloadMethod" class="download-method">
          <option value="stream">流式下载(推荐)</option>
          <option value="blob">普通下载</option>
        </select>
      </div>

      <button
        @click="downloadAll"
        :disabled="downloading || selectedStickers.length === 0"
        class="download-btn"
      >
        <span v-if="downloading">打包中...</span>
        <span v-else>下载选中表情包 ({{ selectedStickers.length || '全部' }})</span>
      </button>
    </div>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sticker',
  props: {
    title: { type: String, default: '' },
    desc: { type: String, default: '' },
    // 将 link 的默认值改为指向 .json 文件
    link: { type: String, required: true },
    background: { type: String, default: '' },
    page: { type: Number, default: 20 },
    prefix: { type: String, default: '' },
    showname: { type: Boolean, default: true }
  },
  data() {
    return {
      stickers: [],
      loading: true,
      error: null,
      configError: null,
      currentPage: 1,
      localPageSize: this.page,
      selectedStickers: [],
      selectAll: false,
      downloading: false,
      downloadMethod: 'stream',
      generatedFileNames: []
    };
  },
  computed: {
    backgroundStyle() {
      if (!this.background) return '';
      if (this.background.startsWith('http') || this.background.startsWith('/')) {
        return `url(${this.background})`;
      }
      return this.background;
    },
    totalPages() {
      return Math.ceil(this.stickers.length / this.localPageSize);
    },
    paginatedStickers() {
      const start = (this.currentPage - 1) * this.localPageSize;
      const end = start + this.localPageSize;
      return this.stickers.slice(start, end);
    }
  },
  watch: {
    page(newVal) {
      this.localPageSize = newVal;
    },
    currentPage() {
      this.selectAll = false;
    }
  },
  async mounted() {
    await this.initDownloadLibs();
    this.fetchStickers();
  },
  methods: {
    async initDownloadLibs() {
      if (typeof window === 'undefined') return;

      try {
        const zipModule = await import('client-zip');
        this.$downloadZip = zipModule.downloadZip;

        const streamModule = await import('streamsaver');
        this.$streamSaver = streamModule.default;
        this.$streamSaver.mitm = 'https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0';
      } catch (err) {
        console.error('加载下载库失败:', err);
        this.downloadMethod = 'blob';
      }
    },

    async fetchStickers() {
      try {
        this.loading = true;
        const response = await fetch(this.link, { credentials: 'same-origin' });

        if (!response.ok) {
          this.configError = `获取配置失败: HTTP ${response.status}`;
          return;
        }

        // --- 核心修改：从 response.json() 获取数据 ---
        const jsonData = await response.json();
        
        // 验证数据是否为数组，并包含必要的结构
        if (Array.isArray(jsonData) && jsonData.every(item => typeof item === 'object' && item !== null && item.url)) {
          this.stickers = jsonData;
          this.configError = null; // 成功加载后清除错误
        } else {
          this.configError = 'JSON 配置格式不正确，期望一个包含 {url: "..."} 对象的数组。';
          this.stickers = []; // 清空数据
        }
        // --- 核心修改结束 ---

      } catch (err) {
        // 如果解析 JSON 失败（例如响应不是有效的 JSON），会捕获到这里
        this.configError = `加载或解析配置失败: ${err.message}`;
      } finally {
        this.loading = false;
      }
    },

    getStickerUrl(url) {
      if (!url) return '';
      try {
        const encoded = encodeURI(decodeURIComponent(url));
        return this.prefix && !url.startsWith('/')
          ? `${this.prefix.replace(/\/+$/, '')}/${encoded.replace(/^\/+/, '')}`
          : encoded;
      } catch {
        return url;
      }
    },

    handleImageError(sticker) {
      this.$set(sticker, 'error', true);
    },

    validatePageSize() {
      this.localPageSize = Math.min(200, Math.max(1, this.localPageSize));
      this.currentPage = 1;
    },

    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },

    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },

    toggleSelectAll() {
      const pageItems = this.paginatedStickers;
      this.selectedStickers = this.selectAll
        ? [...new Set([...this.selectedStickers, ...pageItems])]
        : this.selectedStickers.filter(s => !pageItems.includes(s));
    },

    updateSelectAll() {
      this.selectAll = this.paginatedStickers.every(item =>
        this.selectedStickers.includes(item)
      );
    },

    getFileExtension(url) {
      // 兼容可能没有扩展名的情况，或者 url 是数据 URI 等
      const parts = url.split(/[#?]/)[0].split('.');
      return parts.length > 1 ? parts.pop().toLowerCase() : 'png'; // 默认 png
    },

    getFileName(sticker) {
      const ext = this.getFileExtension(sticker.url);
      const base = sticker.name || `sticker-${Date.now()}`; // 依然使用 sticker.name
      let name = `${base}.${ext}`;
      let counter = 1;

      // 确保生成的图片名在当前下载批次中是唯一的
      while (this.generatedFileNames.includes(name)) {
        name = `${base}_${counter++}.${ext}`;
      }

      this.generatedFileNames.push(name);
      return name;
    },

    async downloadAll() {
      if (this.downloading || !this.$downloadZip) return;

      this.downloading = true;
      this.error = null;
      this.generatedFileNames = []; // 每次下载前清空，确保本批次文件名唯一

      try {
        const filesToDownload = this.selectedStickers.length > 0
          ? this.selectedStickers
          : this.stickers;

        if (filesToDownload.length === 0) {
            this.error = '没有可下载的表情包。';
            return;
        }

        const items = await Promise.all(filesToDownload.map(async sticker => {
          // 检查 sticker.url 是否有效
          if (!sticker.url) {
            console.warn('跳过无效URL的表情包:', sticker);
            return null; // 返回 null，稍后过滤掉
          }

          try {
            const response = await fetch(this.getStickerUrl(sticker.url));
            if (!response.ok) {
              throw new Error(`HTTP ${response.status} for ${sticker.url}`);
            }
            return {
              name: this.getFileName(sticker),
              input: await response.blob(),
              lastModified: new Date()
            };
          } catch (fetchErr) {
            console.error(`下载表情包失败: ${sticker.url}`, fetchErr);
            this.error = `部分表情包下载失败: ${fetchErr.message}`; // 提供用户反馈
            return null; // 返回 null
          }
        })).then(results => results.filter(item => item !== null)); // 过滤掉下载失败的项

        if (items.length === 0) {
          this.error = '没有成功下载的表情包用于打包。';
          return;
        }

        const zipName = `sticker-pack-${Date.now()}.zip`;

        if (this.downloadMethod === 'stream' && this.$streamSaver) {
          const fileStream = this.$streamSaver.createWriteStream(zipName);
          await this.$downloadZip(items).body.pipeTo(fileStream);
        } else {
          const blob = await this.$downloadZip(items).blob();
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = zipName;
          document.body.appendChild(a); // 某些浏览器需要将a标签添加到DOM
          a.click();
          document.body.removeChild(a); // 使用后移除
          setTimeout(() => URL.revokeObjectURL(url), 100);
        }
      } catch (err) {
        this.error = `打包下载失败: ${err.message}`;
      } finally {
        this.downloading = false;
      }
    }
  }
};
</script>

<style scoped>
/* 样式保持不变 */
.sticker-container {
  border-radius: 12px;
  padding: 24px;
  margin: 2rem 0;
  background-color: transparent;
  border: 1px solid #eee;
}

.sticker-header {
  text-align: center;
  margin-bottom: 20px;
}

.sticker-header h2 {
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: #333;
}

.sticker-header p {
  color: #666;
  font-size: 1.1rem;
}

.controls-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.page-size-selector input {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 80px;
  text-align: center;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.pagination-controls button {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.pagination-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.sticker-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.sticker-item {
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.sticker-item:hover {
  transform: translateY(-3px);
}

.sticker-checkbox {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;
}

.sticker-img-container {
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #f9f9f9;
  position: relative;
}

.sticker-img-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.image-error-tip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(231, 76, 60, 0.7);
  color: white;
  text-align: center;
  padding: 3px;
  font-size: 0.8rem;
}

.sticker-name {
  padding: 8px;
  text-align: center;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #f5f5f5;
}

.download-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.select-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.download-method {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.selected-count {
  color: #666;
  font-size: 0.9em;
}

.download-btn {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.download-btn:hover:not(:disabled) {
  background: #3e8e41;
}

.download-btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.loading, .empty-message, .error-message {
  text-align: center;
  padding: 40px;
  font-size: 1.1rem;
}

.empty-message {
  color: #888;
}

.error-message {
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.05);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .sticker-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .controls-section, .download-section {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
}
</style>