import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 相对 base './' —— 本地 dev 和 GitHub Pages 都能用
const base = process.env.VITE_BASE || './';

// 所有 HTML 入口 —— Vite 会为每个生成对应的 build 产物
const pages = [
  'index',
  'books',
  'blog',
  'art',
  'courses',
  'tools',
  'essays',
  'about',
];

export default defineConfig({
  base,
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((p) => [p, resolve(__dirname, `${p}.html`)])
      ),
    },
  },
  server: { host: true, port: 5173, strictPort: false },
  preview: { host: true, port: 4173, strictPort: false },
});
