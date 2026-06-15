// Art page
import { catById, worksByCat } from '../data.js';
import { escapeHtml } from '../components.js';

export function render() {
  const main = document.getElementById('main');
  if (!main) return;

  const cat = catById('art');
  const all = worksByCat('art');

  // 生成一组艺术色对（用每个分类的 accent 派生的多个变体）
  const palettes = [
    { from: '#1f3a2e', to: '#3a5a4a' },
    { from: '#2a2a3a', to: '#4a4a5a' },
    { from: '#3a2a2a', to: '#5a3a3a' },
    { from: '#2a3a2a', to: '#3a4a3a' },
    { from: '#1a2a3a', to: '#3a4a5a' },
    { from: '#3a2a3a', to: '#5a3a4a' },
    { from: '#2a3a3a', to: '#4a5a5a' },
    { from: '#3a3a2a', to: '#5a5a3a' },
    { from: '#1a3a2a', to: '#3a5a4a' },
  ];

  const pieceHtml = (label, palette, wide) => `
    <div class="art-piece ${wide ? 'art-piece-wide' : ''}"
         style="--c-from:${palette.from};--c-to:${palette.to}"
         data-reveal>
      <span class="art-piece-label">${escapeHtml(label)}</span>
    </div>
  `;

  // 9 块作品：3 个分类 × 3 件
  const pieces = [];
  const series = ['山水小品', '城市速写', '封面设计集'];
  let pIdx = 0;
  for (let s = 0; s < 3; s++) {
    for (let p = 0; p < 3; p++) {
      const wide = (p === 0 && s === 0); // 第一块大
      pieces.push(pieceHtml(`${series[s]} · No. ${p + 1}`, palettes[pIdx % palettes.length], wide));
      pIdx++;
    }
  }

  const seriesHtml = all.map((w, i) => `
    <a class="work-card" href="${escapeHtml(w.url || '#')}" data-reveal>
      <div class="work-card-eyebrow">Series · ${escapeHtml(w.status)}</div>
      <h3 class="work-card-title">${escapeHtml(w.title)}</h3>
      ${w.subtitle ? `<div class="work-card-sub">${escapeHtml(w.subtitle)}</div>` : ''}
      <p class="work-card-desc">${escapeHtml(w.desc)}</p>
      <div class="work-card-foot">
        <span>${escapeHtml(String(w.year))}</span>
        <span class="work-card-status-soon">查看作品 →</span>
      </div>
    </a>
  `).join('');

  main.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-eyebrow" data-reveal>${escapeHtml(cat.nameZh)} · Art</div>
        <h1 class="hero-title" data-reveal>${escapeHtml(cat.name)}.</h1>
        <p class="hero-tagline" data-reveal>${escapeHtml(cat.subtitle)}</p>
        <div class="hero-cta" data-reveal>
          <a class="btn btn-primary" href="#gallery">看作品</a>
          <a class="btn btn-outline" href="./index.html">返回首页</a>
        </div>
      </div>
    </section>

    <section class="section section-tight" id="gallery">
      <div class="container container-wide">
        <div class="art-grid">
          ${pieces.join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container-wide">
        <div class="section-head" data-reveal>
          <div class="section-eyebrow">Series</div>
          <h2 class="section-title">三个系列</h2>
        </div>
        <div class="work-grid">
          ${seriesHtml}
        </div>
      </div>
    </section>
  `;
}
