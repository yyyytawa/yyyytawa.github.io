# docs-assets

> 🗂️ Static assets storage for documentation site (NOT for CDN)
> 🗂️ 文档站点静态资源存储库（非 CDN 用途）

---

## 📋 Purpose / 用途

**English:**  
This repository is exclusively used for storing static assets (images, icons, fonts, etc.) as a Git submodule for my main documentation repository. It is **NOT** a CDN service.

**中文：**  
此仓库仅用于作为主文档仓库的 Git 子模块，存储静态资源文件（图片、图标、字体等）。**此仓库不提供 CDN 服务。**

---

## ⚠️ Important Notice / 重要声明

**English:**  
- All assets are solely for personal documentation use
- No public CDN endpoints are provided or supported
- Resource access is managed through Git submodule references only

**中文：**  
- 所有资源仅用于个人文档站点的正常使用
- 不提供任何公开的 CDN 访问端点
- 资源引用仅通过 Git 子模块机制进行管理

---

## 🔧 Usage / 使用方式

### Add as Submodule / 添加为子模块

```bash
# In your main repository root / 在主仓库根目录执行
git submodule add git@github.com:yyyytawa/docs-assets.git src/.vuepress/public
