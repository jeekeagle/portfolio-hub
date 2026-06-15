// Books page
import { catById, worksByCat, featuredOf } from '../data.js';
import { escapeHtml, isLive } from '../components.js';

export function render() {
  const main = document.getElementById('main');
  if (!main) return;

  const cat = catById('books');
  const all = worksByCat('books');
  const featured = featuredOf('books')[0];
  const rest = all.filter((w) => !w.featured);

  const coverHtml = (w) => `
    <div class="featured-cover" data-reveal
         style="--c-from:${escapeHtml(w.accent)};--c-to:color-mix(in srgb, ${escapeHtml(w.accent)} 50%, #000)">
      <div class="featured-cover-mark">${escapeHtml(w.title[0])}</div>
      <div class="featured-cover-meta">${escapeHtml(w.title)} · ${escapeHtml(w.status)}</div>
    </div>
  `;

  const restHtml = rest.map((w) => `
    <a class="work-card" href="${escapeHtml(w.url || '#')}" ${isLive(w.url) ? 'target="_blank" rel="noopener"' : ''} data-reveal>
      <div class="work-card-eyebrow">${escapeHtml(cat.name)} · ${escapeHtml(w.year)}</div>
      <h3 class="work-card-title">${escapeHtml(w.title)}</h3>
      ${w.subtitle ? `<div class="work-card-sub">${escapeHtml(w.subtitle)}</div>` : ''}
      <p class="work-card-desc">${escapeHtml(w.desc)}</p>
      <div class="work-card-foot">
        <span>${escapeHtml(w.status)}</span>
        <span class="${isLive(w.url) ? 'work-card-status-live' : 'work-card-status-soon'}">${isLive(w.url) ? '↗ 访问' : '筹备中'}</span>
      </div>
    </a>
  `).join('');

  main.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-eyebrow" data-reveal>${escapeHtml(cat.nameZh)} · Books</div>
        <h1 class="hero-title" data-reveal>${escapeHtml(cat.name)}.</h1>
        <p class="hero-tagline" data-reveal>${escapeHtml(cat.subtitle)}</p>
        <div class="hero-cta" data-reveal>
          <a class="btn btn-primary" href="${escapeHtml(featured?.url || '#')}" ${isLive(featured?.url) ? 'target="_blank" rel="noopener"' : ''}>读最新一本</a>
          <a class="btn btn-outline" href="./index.html">返回首页</a>
        </div>
      </div>
    </section>

    ${featured ? `
    <section class="section">
      <div class="container container-wide">
        <div class="section-head" data-reveal>
          <div class="section-eyebrow">Featured</div>
          <h2 class="section-title">最新上线</h2>
        </div>
        <div class="featured">
          ${coverHtml(featured)}
          <div class="featured-body" data-reveal>
            <div class="featured-status">
              <span class="pulse"></span>
              <span>${escapeHtml(featured.status)} · ${escapeHtml(featured.year)}</span>
            </div>
            <h3 class="featured-title">${escapeHtml(featured.title)}</h3>
            <p class="featured-subtitle">${escapeHtml(featured.subtitle || '')}</p>
            <p class="featured-desc">${escapeHtml(featured.desc)}</p>
            <div>
              <a class="btn btn-primary" href="${escapeHtml(featured.url)}" ${isLive(featured.url) ? 'target="_blank" rel="noopener"' : ''}>在线阅读</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    ` : ''}

    <section class="section section-tight">
      <div class="container container-wide">
        <div class="section-head" data-reveal>
          <div class="section-eyebrow">Library</div>
          <h2 class="section-title">全部 ${all.length} 本</h2>
        </div>
        <div class="work-grid">
          ${restHtml}
        </div>
      </div>
    </section>
  `;
}
