// Tools page
import { catById, worksByCat } from '../data.js';
import { escapeHtml, isLive } from '../components.js';

export function render() {
  const main = document.getElementById('main');
  if (!main) return;

  const cat = catById('tools');
  const all = worksByCat('tools');

  const itemHtml = (w, i) => `
    <a class="tool-item" href="${escapeHtml(w.url || '#')}" ${isLive(w.url) ? 'target="_blank" rel="noopener"' : ''} data-reveal>
      <span class="tool-icon" style="--c-from:${escapeHtml(w.accent)};--c-to:color-mix(in srgb, ${escapeHtml(w.accent)} 40%, #000)">${escapeHtml(w.title[0].toUpperCase())}</span>
      <div>
        <div class="tool-name">${escapeHtml(w.title)}</div>
        <div class="tool-desc">${escapeHtml(w.desc)}</div>
      </div>
      <span class="tool-cta">${isLive(w.url) ? '查看' : '筹备中'}</span>
    </a>
  `;

  main.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-eyebrow" data-reveal>${escapeHtml(cat.nameZh)} · Tools</div>
        <h1 class="hero-title" data-reveal>${escapeHtml(cat.name)}.</h1>
        <p class="hero-tagline" data-reveal>${escapeHtml(cat.subtitle)}</p>
        <div class="hero-cta" data-reveal>
          <a class="btn btn-primary" href="#tools">看工具</a>
          <a class="btn btn-outline" href="./index.html">返回首页</a>
        </div>
      </div>
    </section>

    <section class="section section-tight" id="tools">
      <div class="container">
        <div class="section-head" data-reveal>
          <div class="section-eyebrow">Open Source</div>
          <h2 class="section-title">${all.length} 个工具</h2>
          <p class="section-sub">给自己的创作流程减负，慢慢开源出来。</p>
        </div>
        <div class="tool-list">
          ${all.map((w, i) => itemHtml(w, i)).join('')}
        </div>
      </div>
    </section>
  `;
}
