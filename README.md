# jeekeagle · 个人作品集 Hub

一个轻量、零框架的个人作品集首页：Bento 网格 + 明暗主题切换 + 分类 + 演进时间线。  
所有作品（书籍、博客、画作、课程、工具、随笔、实验）通过 `src/data.js` 一处维护。

## 技术栈

- [Vite 5](https://vitejs.dev/) —— 构建 & 本地开发
- 原生 HTML / CSS / JS（**不依赖任何前端框架**）
- 系统字体 + Inter + Noto Serif SC + JetBrains Mono
- 部署目标：GitHub Pages

## 本地开发

```bash
cd portfolio-hub
npm install
npm run dev          # http://localhost:5173
```

## 生产构建

```bash
npm run build        # 产物输出到 dist/
npm run preview      # 本地预览生产构建
```

## 部署到 GitHub Pages

1. 推到 `jeekeagle/portfolio-hub` 仓库的 `main` 分支。
2. 仓库 Settings → Pages → Source 选 **GitHub Actions**。
3. 触发 `.github/workflows/deploy.yml`（首次需要手动启用一次），之后每次 push 自动部署。
4. 站点会出现在 `https://jeekeagle.github.io/portfolio-hub/`。

> 想用自定义域（如 `jeekeagle.com`），建一个 `public/CNAME` 文件写上域名即可。

## 目录结构

```
portfolio-hub/
├── index.html              入口（语义结构）
├── vite.config.js          base 路径 / 构建配置
├── public/
│   └── favicon.svg         站点图标
├── src/
│   ├── main.js             渲染逻辑 + 主题切换 + 视口动画
│   ├── style.css           设计令牌 + 全部样式
│   └── data.js             ★ 所有内容数据在这里
└── .github/workflows/
    └── deploy.yml          GitHub Pages 自动部署
```

## 怎么新增作品 / 改内容

打开 `src/data.js`：

- **新增作品**：往 `works` 数组里追加一条对象即可：
  ```js
  {
    id: 'my-new-thing',
    category: 'tool',        // book / blog / art / course / tool / essay / lab
    title: '我的新东西',
    desc: '一句话简介。',
    url: 'https://...',      // 暂未上线就写 '#'
    year: 2026,
    status: '已上线',         // 任意状态文字
    featured: true,          // 设为 true 会在 hero 下方的大卡里出现
  }
  ```
- **新增分类**：在 `categories` 数组加一项，并在 `style.css` 里给 `.cat-{id}` 一个 grid-column span。
- **新增时间线条目**：往 `timeline` 数组追加。

## 设计原则

- **颜色**：白底 + 单一蓝色 `#2563eb`（深色模式用 `#60a5fa`）。
- **字号**：12 列网格 + 大字衬线 Hero + 无衬线正文 + 等宽用于标签/年份。
- **节奏**：Bento 卡片大小不一，每个分类卡的宽度也不一样，避免整齐划一的死板感。
- **动效**：进入视口错位淡入，hover 上抬 + 蓝色描边，主题切换平滑过渡。
- **无障碍**：键盘焦点环、`prefers-reduced-motion` 关闭动画、语义化结构。

version 标记在源码里 (src/data.js 的 profile.version)：当前 Apple 1.0（2026-06-15）。改 version 字段、build、push，nav 上的小徽章和 footer 就会自动更新。git tag 同步：
