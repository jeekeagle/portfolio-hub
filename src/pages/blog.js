// Blog (Notes) page
import { catById, worksByCat } from '../data.js';
import { escapeHtml } from '../components.js';

export function render() {
  const main = document.getElementById('main');
  if (!main) return;

  const cat = catById('blog');
  const all = worksByCat('blog');

  // 收集所有 post，按日期倒序
  const posts = [];
  all.forEach((w) => {
    (w.posts || []).forEach((p) => posts.push({ ...p, source: w.title, sourceId: w.id }));
  });
  posts.sort((a, b) => b.date.localeCompare(a.date));

  const listHtml = posts.map((p) => `
    <a class="post-item" href="#" data-reveal>
      <span class="post-date">${escapeHtml(p.date)}</span>
      <span>
        <div class="post-title">${escapeHtml(p.title)}</div>
        <div class="post-date" style="margin-top: 4px;">— ${escapeHtml(p.source)}</div>
      </span>
      <span class="post-arrow">›</span>
    </a>
  `).join('');

  main.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-eyebrow" data-reveal>${escapeHtml(cat.nameZh)} · ${escapeHtml(cat.name)}</div>
        <h1 class="hero-title" data-reveal>${escapeHtml(cat.name)}.</h1>
        <p class="hero-tagline" data-reveal>${escapeHtml(cat.subtitle)}</p>
        <div class="hero-cta" data-reveal>
          <a class="btn btn-primary" href="#latest">读最新一篇</a>
          <a class="btn btn-outline" href="./index.html">返回首页</a>
        </div>
      </div>
    </section>

    <section class="section section-tight" id="latest">
      <div class="container">
        <div class="section-head" data-reveal>
          <div class="section-eyebrow">Recent · ${posts.length} 篇</div>
          <h2 class="section-title">最近的记录</h2>
          <p class="section-sub">每周一篇的周记 + 不定期的读书摘录。</p>
        </div>
        <div class="post-list">
          ${listHtml}
        </div>
      </div>
    </section>
  `;
}
