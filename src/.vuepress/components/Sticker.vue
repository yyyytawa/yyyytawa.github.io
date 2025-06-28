<template>
  <div class="sticker-container" :style="{ background: backgroundStyle }">
    <!-- 头部区域 -->
    <div v-if="title" class="sticker-header">
      <h2>{{ title }}</h2>
      <p v-if="desc">{{ desc }}</p>
    </div>
    
    <!-- 分页控制 -->
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
    
    <!-- 表情包展示区 -->
    <div v-if="loading" class="loading">加载表情包配置中...</div>
    
    <div v-else-if="stickers.length === 0" class="empty-message">
      没有找到表情包，请检查配置文件
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
        </div>
        <div v-if="showname && sticker.name" class="sticker-name">
          {{ sticker.name }}
        </div>
      </div>
    </div>
    
    <!-- 底部下载控制区 -->
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
import { downloadZip } from 'client-zip';
import streamSaver from 'streamsaver';

export default {
  name: 'Sticker',
  props: {
    title: { type: String, default: '' },
    desc: { type: String, default: '' },
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
      currentPage: 1,
      localPageSize: this.page,
      selectedStickers: [],
      selectAll: false,
      downloading: false,
      failedImages: new Set()
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
  mounted() {
    this.fetchStickers();
    if (typeof window !== 'undefined') {
      streamSaver.mitm = 'https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0';
    }
  },
  methods: {
    async fetchStickers() {
      try {
        this.loading = true;
        const response = await fetch(this.link);
        if (!response.ok) throw new Error(`获取配置失败: ${response.status}`);
        const yamlText = await response.text();
        this.parseYaml(yamlText);
      } catch (err) {
        console.error('加载失败:', err);
        this.error = `加载失败: ${err.message} (请检查YAML文件路径)`;
      } finally {
        this.loading = false;
      }
    },
    parseYaml(yamlText) {
      try {
        const lines = yamlText.split('\n').filter(line => {
          const trimmed = line.trim();
          return trimmed && !trimmed.startsWith('#');
        });
        
        const stickers = [];
        let currentSticker = {};
        
        for (const line of lines) {
          const trimmedLine = line.trim();
          
          if (trimmedLine.startsWith('-')) {
            if (currentSticker.url) {
              stickers.push(currentSticker);
            }
            currentSticker = {};
            continue;
          }
          
          const colonIndex = trimmedLine.indexOf(':');
          if (colonIndex > 0) {
            const key = trimmedLine.substring(0, colonIndex).trim();
            let value = trimmedLine.substring(colonIndex + 1).trim();
            
            // 移除各种引号
            value = value.replace(/^['"`]|['"`]$/g, '');
            
            if (key && value !== '') {
              currentSticker[key] = value;
            }
          }
        }
        
        if (currentSticker.url) {
          stickers.push(currentSticker);
        }
        
        this.stickers = stickers.map(sticker => ({
          name: sticker.name && sticker.name !== 'null' ? sticker.name : null,
          url: sticker.url
        }));
        
        console.log('解析到的表情包:', this.stickers);
      } catch (err) {
        console.error('解析失败:', err);
        this.error = '解析配置失败，请检查YAML格式';
      }
    },
    getStickerUrl(url) {
      if (!url) return '';
      
      try {
        // 统一处理URL编码
        let encodedUrl = url;
        try {
          encodedUrl = decodeURIComponent(url); // 先解码防止双重编码
        } catch (e) {}
        encodedUrl = encodeURI(encodedUrl);
        
        // 处理本地路径
        if (encodedUrl.startsWith('/')) {
          return encodedUrl;
        }
        
        // 处理前缀
        const cleanPrefix = this.prefix.replace(/\/+$/, '');
        const cleanUrl = encodedUrl.replace(/^\/+/, '');
        
        return cleanPrefix ? `${cleanPrefix}/${cleanUrl}` : cleanUrl;
      } catch (e) {
        console.error('URL处理失败:', e);
        return url;
      }
    },
    handleImageError(sticker) {
      console.error('图片加载失败:', sticker.url);
      this.failedImages.add(sticker.url);
    },
    validatePageSize() {
      if (this.localPageSize < 1) this.localPageSize = 1;
      if (this.localPageSize > 200) this.localPageSize = 200;
      this.currentPage = 1;
    },
    resetPagination() {
      this.currentPage = 1;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    toggleSelectAll() {
      if (this.selectAll) {
        this.selectedStickers = [...new Set([...this.selectedStickers, ...this.paginatedStickers])];
      } else {
        this.selectedStickers = this.selectedStickers.filter(
          s => !this.paginatedStickers.includes(s)
        );
      }
    },
    updateSelectAll() {
      this.selectAll = this.paginatedStickers.every(
        item => this.selectedStickers.includes(item)
      );
    },
    async downloadAll() {
      if (this.downloading) return;
      this.downloading = true;
      
      try {
        const files = this.selectedStickers.length > 0 
          ? this.selectedStickers 
          : this.stickers;
        
        const fileStream = streamSaver.createWriteStream('表情包合集.zip');
        const zipStream = await downloadZip(
          files.map(sticker => ({
            name: this.getFileName(sticker),
            input: fetch(this.getStickerUrl(sticker.url)).then(r => {
              if (!r.ok) throw new Error(`下载失败: ${r.status}`);
              return r.blob();
            }).catch(err => {
              console.error(`下载 ${sticker.url} 失败:`, err);
              throw err;
            })
          }))
        ).stream();
        
        if (zipStream.pipeTo) {
          await zipStream.pipeTo(fileStream);
        } else {
          const writer = fileStream.getWriter();
          const reader = zipStream.getReader();
          
          const pump = () => {
            reader.read().then(({ value, done }) => {
              if (done) {
                writer.close();
                return;
              }
              writer.write(value);
              pump();
            });
          };
          
          pump();
        }
      } catch (err) {
        console.error('打包失败:', err);
        this.error = '打包失败: ' + err.message;
      } finally {
        this.downloading = false;
      }
    },
    getFileName(sticker) {
      const ext = sticker.url.split('.').pop() || 'png';
      return sticker.name ? `${sticker.name}.${ext}` : `sticker_${Date.now()}.${ext}`;
    }
  }
};
</script>

<style scoped>
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
}

.sticker-img-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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