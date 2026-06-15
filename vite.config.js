import { defineConfig } from 'vite';

// 用相对 base './' —— 这样：
//   1. npm run dev  -> http://localhost:5173/ 直接能开，资源 200
//   2. GitHub Pages 项目站 (jeekeagle.github.io/portfolio-hub/) 也能用
//   3. 自定义域名 (jeekeagle.com) 也能用
// 想改成绝对路径再 fork 时设 VITE_BASE=/portfolio-hub/ 即可
const base = process.env.VITE_BASE || './';

export default defineConfig({
  base,
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
