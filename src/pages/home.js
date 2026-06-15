// Home page
import { profile, categories, works, timeline, catById, worksByCat, featuredOf } from '../data.js';
import { escapeHtml, isLive } from '../components.js';

export function render() {
  const main = document.getElementById('main');
  if (!main) return;

  // 大数 7 类计数
  const counts = Object.fromEntries(
    categories.map((c) => [c.id, worksByCat(c.id).length])
  );

  // 主推作品
  const featuredBook = featuredOf('books')[0];

  // 分类 tile 颜色映射 —— 每个分类一对 from / to
  const tileColors = {
    books:   { from: '#5A2A2A', to: '#8B3A3A' },
    blog:    { from: '#0a4d68', to: '#2a7a9a' },
    art:     { from: '#1f3a2e', to: '#3a5a4a' },
    courses: { from: '#4b2e83', to: '#6b4ea3' },
    tools:   { from: '#1a4480', to: '#3a6ab0' },
    essays:  { from: '#5a4a2e', to: '#8a6a3e' },
    lab:     { from: '#2a2a2a', to: '#4a4a4a' },
  };

  const tileClass = (i) => `cat-tile cat-tile-${i + 1}`;
  const tilesHtml = categories
    .map((c, i) => `
      <a class="${tileClass(i)}" href="./${escapeHtml(c.id)}.html" style="--c-from:${tileColors[c.id].from};--c-to:${tileColors[c.id].to}">
        <div>
          <div class="cat-tile-name">${escapeHtml(c.name)}</div>
        </div>
        <div class="cat-tile-foot">
          <span>${escapeHtml(c.nameZh)} · ${counts[c.id]} 件</span>
          <span class="cat-tile-arrow">→</span>
        </div>
      </a>
    `).join('');

  // Timeline html
  const timelineHtml = timeline.map((t) => `
    <div class="timeline-item" data-reveal>
      <div class="timeline-year">${escapeHtml(t.year)}</div>
      <div class="timeline-title">${escapeHtml(t.title)}</div>
      <div class="timeline-desc">${escapeHtml(t.desc)}</div>
    </div>
  `).join('');

  main.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-eyebrow" data-reveal>${escapeHtml(profile.eyebrow)}</div>
        <h1 class="hero-title hero-title-serif" data-reveal>${escapeHtml(profile.nameDisplay)}</h1>
        <p class="hero-tagline" data-reveal>${escapeHtml(profile.tagline)}</p>
        <div class="hero-cta" data-reveal>
          <a class="btn btn-primary" href="./books.html">看作品</a>
          <a class="btn btn-outline" href="./about.html">关于我</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container-wide">
        <div class="section-head section-head-center" data-reveal>
          <div class="section-eyebrow">分类</div>
          <h2 class="section-title">所有作品，按类型索引。</h2>
          <p class="section-sub">每件都是亲手做的东西 —— 书、笔记、画、课、工具、随笔、实验。</p>
        </div>
        <div class="cat-grid">
          ${tilesHtml}
        </div>
      </div>
    </section>

    ${featuredBook ? `
    <section class="section section-dark">
      <div class="container container-wide">
        <div class="featured">
          <div class="featured-cover" data-reveal
               style="--c-from:${escapeHtml(featuredBook.accent)};--c-to:color-mix(in srgb, ${escapeHtml(featuredBook.accent)} 50%, #000)">
            <div class="featured-cover-mark">${escapeHtml(featuredBook.title[0])}</div>
            <div class="featured-cover-meta">${escapeHtml(featuredBook.title)} · ${escapeHtml(featuredBook.status)}</div>
          </div>
          <div class="featured-body" data-reveal>
            <div class="featured-status">
              <span class="pulse"></span>
              <span>${escapeHtml(featuredBook.status)} · ${escapeHtml(featuredBook.year)}</span>
            </div>
            <h2 class="featured-title">${escapeHtml(featuredBook.title)}</h2>
            <p class="featured-subtitle">${escapeHtml(featuredBook.subtitle || '')}</p>
            <p class="featured-desc">${escapeHtml(featuredBook.desc)}</p>
            <div>
              <a class="btn btn-primary" href="${escapeHtml(featuredBook.url)}" ${isLive(featuredBook.url) ? 'target="_blank" rel="noopener"' : ''}>在线阅读</a>
              <a class="btn btn-link" href="./books.html">更多书籍</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    ` : ''}

    <section class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <div class="section-eyebrow">演进</div>
          <h2 class="section-title">从第一本书到课程筹备。</h2>
          <p class="section-sub">一条缓慢但持续的轨迹。</p>
        </div>
        <div class="timeline">
          ${timelineHtml}
        </div>
      </div>
    </section>
  `;
}
