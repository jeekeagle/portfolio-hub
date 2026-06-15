// Entry: 根据 body[data-page] 路由到对应页面渲染
import './style.css';
import { renderNav, renderFooter, initTheme, initReveal } from './components.js';

const page = document.body.dataset.page || 'home';

async function boot() {
  // 1. 先把 nav / footer 装上 —— 任何页面都需要
  renderNav();
  renderFooter();
  initTheme();

  // 2. 根据当前页面加载对应模块
  try {
    if (page === 'home') {
      const m = await import('./pages/home.js');
      m.render();
    } else {
      const m = await import(`./pages/${page}.js`);
      m.render();
    }
  } catch (err) {
    console.error('Page render failed:', err);
    const main = document.getElementById('main');
    if (main) {
      main.innerHTML = `<section class="hero"><div class="container"><h1 class="hero-title">Not found</h1><p class="hero-tagline">页面加载失败。</p></div></section>`;
    }
  }

  // 3. 全局动效
  initReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
