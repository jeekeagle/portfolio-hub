// About page
import { profile, timeline } from '../data.js';
import { escapeHtml } from '../components.js';

export function render() {
  const main = document.getElementById('main');
  if (!main) return;

  const timelineHtml = timeline.slice(-4).map((t) => `
    <div class="timeline-item" data-reveal>
      <div class="timeline-year">${escapeHtml(t.year)}</div>
      <div class="timeline-title">${escapeHtml(t.title)}</div>
      <div class="timeline-desc">${escapeHtml(t.desc)}</div>
    </div>
  `).join('');

  main.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-eyebrow" data-reveal>关于 · About</div>
        <h1 class="hero-title hero-title-serif" data-reveal>${escapeHtml(profile.name)}.</h1>
        <p class="hero-tagline" data-reveal>${escapeHtml(profile.signature)}</p>
      </div>
    </section>

    <section class="section section-tight">
      <div class="container">
        <div class="about-grid">
          <div data-reveal>
            <div class="about-avatar">${escapeHtml(profile.name[0].toUpperCase())}</div>
            <h2 class="about-name">${escapeHtml(profile.role)}</h2>
            <p class="about-body">工程师、写作者、业余画手。把零散的想法沉淀成书、课和工具。这个页面是所有作品的索引 —— 旧的在更新，新的在建，欢迎常回来看看。</p>
            <p class="about-body">喜欢慢慢做东西。一年写一本不厚的书，比一年写三本厚的更对得起读者。</p>
          </div>
          <div data-reveal>
            <dl class="about-meta">
              <dt>Role</dt><dd>${escapeHtml(profile.role)}</dd>
              <dt>Where</dt><dd>${escapeHtml(profile.location)}</dd>
              <dt>GitHub</dt><dd><a href="${escapeHtml(profile.github)}" target="_blank" rel="noopener">@${escapeHtml(profile.name)}</a></dd>
              <dt>Email</dt><dd><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></dd>
              <dt>Believes</dt><dd>${escapeHtml(profile.quote)}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <div class="section-eyebrow">Recent</div>
          <h2 class="section-title">最近在做什么</h2>
        </div>
        <div class="timeline">
          ${timelineHtml}
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container container-wide">
        <div class="section-head section-head-center" data-reveal>
          <h2 class="section-title">Say hi.</h2>
          <p class="section-sub">欢迎写信。读书、画画、做课的合作也都欢迎。</p>
        </div>
        <div style="text-align: center;" data-reveal>
          <a class="btn btn-primary" href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
          <a class="btn btn-outline" href="${escapeHtml(profile.github)}" target="_blank" rel="noopener" style="border-color: rgba(255,255,255,0.3); color: var(--text-inverse);">GitHub ↗</a>
        </div>
      </div>
    </section>
  `;
}
