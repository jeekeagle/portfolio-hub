// Courses page
import { catById, worksByCat } from '../data.js';
import { escapeHtml } from '../components.js';

export function render() {
  const main = document.getElementById('main');
  if (!main) return;

  const cat = catById('courses');
  const all = worksByCat('courses');

  const cardHtml = (w, i) => `
    <article class="course-card" data-reveal
             style="--c-from:${escapeHtml(w.accent)};--c-to:color-mix(in srgb, ${escapeHtml(w.accent)} 40%, #000)">
      <div class="course-card-num">No. 0${i + 1}</div>
      <div>
        <h3 class="course-card-title">${escapeHtml(w.title)}</h3>
        ${w.subtitle ? `<div class="course-card-sub">${escapeHtml(w.subtitle)}</div>` : ''}
        <p style="font-size: 15px; line-height: 1.5; opacity: 0.85; margin-bottom: var(--space-6);">${escapeHtml(w.desc)}</p>
        <div class="course-card-status">${escapeHtml(w.status)}</div>
      </div>
    </article>
  `;

  main.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-eyebrow" data-reveal>${escapeHtml(cat.nameZh)} · Courses</div>
        <h1 class="hero-title" data-reveal>${escapeHtml(cat.name)}.</h1>
        <p class="hero-tagline" data-reveal>${escapeHtml(cat.subtitle)}</p>
        <div class="hero-cta" data-reveal>
          <a class="btn btn-primary" href="#enroll">预约下一批</a>
          <a class="btn btn-outline" href="./about.html">关于我</a>
        </div>
      </div>
    </section>

    <section class="section section-dark" id="enroll">
      <div class="container container-wide">
        <div class="section-head section-head-center" data-reveal>
          <div class="section-eyebrow">Coming 2026</div>
          <h2 class="section-title">三门在筹备的课</h2>
          <p class="section-sub">从书里长出来的课，先把大纲磨好，再开讲。</p>
        </div>
        <div class="course-grid">
          ${all.map((w, i) => cardHtml(w, i)).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head section-head-center" data-reveal>
          <h2 class="section-title">想第一时间知道开课？</h2>
          <p class="section-sub">发邮件到 hi@example.com 留个位，开课前一月会通知。</p>
        </div>
        <div style="text-align: center;" data-reveal>
          <a class="btn btn-primary" href="mailto:hi@example.com?subject=预约课程">发邮件预约</a>
        </div>
      </div>
    </section>
  `;
}
