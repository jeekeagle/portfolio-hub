// ---------------------------------------------------------------------------
// personal portfolio hub · renderer
// 数据从 data.js 注入，所有 DOM 通过这里生成。
// ---------------------------------------------------------------------------
import './style.css';
import { profile, now, categories, works, timeline, featured, worksByCategory } from './data.js';

// ---------------------------------------------------------------------------
// 工具
// ---------------------------------------------------------------------------
const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isExternal = (url = '') => /^https?:\/\//.test(url);
const isLive = (url = '') => url && url !== '#' && isExternal(url);

// ---------------------------------------------------------------------------
// 渲染：Hero
// ---------------------------------------------------------------------------
function renderHero() {
  document.getElementById('hero-eyebrow').textContent = profile.eyebrow;
  document.getElementById('hero-title').textContent = profile.name;
  document.getElementById('hero-tagline').textContent = profile.tagline;

  const actions = document.getElementById('hero-actions');
  actions.innerHTML = `
    <a class="btn btn-primary" href="#categories">看作品 →</a>
    <a class="btn" href="#timeline">看演进</a>
    <a class="btn" href="${escapeHtml(profile.github)}" target="_blank" rel="noopener">GitHub ↗</a>
  `;
}

// ---------------------------------------------------------------------------
// 渲染：Status
// ---------------------------------------------------------------------------
function renderStatus() {
  document.getElementById('status-text').textContent = now.text;
  document.getElementById('status-meta').textContent = `${now.label} · ${now.meta}`;
}

// ---------------------------------------------------------------------------
// 渲染：Featured works —— 大卡片网格
// ---------------------------------------------------------------------------
function renderFeatured() {
  const list = featured();
  const root = document.getElementById('featured');

  root.innerHTML = list
    .map((w, i) => {
      const cat = categories.find((c) => c.id === w.category);
      const live = isLive(w.url);
      const cls = `feat-${i + 1}`;
      return `
        <a class="card-work ${cls}" data-reveal
           href="${escapeHtml(w.url || '#')}"
           ${live ? 'target="_blank" rel="noopener"' : ''}>
          <div class="card-work-head">
            <span class="tag"><span class="tag-dot" style="background:${escapeHtml(w.accent || 'var(--accent)')}"></span>${escapeHtml(cat?.name || w.category)}</span>
            <span class="card-work-foot-meta">${escapeHtml(String(w.year))}</span>
          </div>
          <div>
            <h3 class="card-work-title">${escapeHtml(w.title)}</h3>
            <p class="card-work-desc">${escapeHtml(w.desc)}</p>
          </div>
          <div class="card-work-foot">
            <span class="card-work-foot-meta">${escapeHtml(w.status || '')}</span>
            <span class="card-work-arrow">${live ? '↗' : '→'}</span>
          </div>
        </a>
      `;
    })
    .join('');
}

// ---------------------------------------------------------------------------
// 渲染：分类卡 —— 每张卡里列该分类的作品
// ---------------------------------------------------------------------------
function renderCategories() {
  const root = document.getElementById('categories-grid');

  root.innerHTML = categories
    .map((cat) => {
      const items = worksByCategory(cat.id);
      if (!items.length) return '';

      const worksHtml = items
        .map((w) => {
          const live = isLive(w.url);
          return `
            <li class="cat-work-item">
              <a href="${escapeHtml(w.url || '#')}" ${live ? 'target="_blank" rel="noopener"' : ''}>
                ${escapeHtml(w.title)}
              </a>
              <span class="cat-work-status ${w.url === '#' ? 'soon' : ''}">${escapeHtml(w.status || (live ? 'live' : 'soon'))}</span>
            </li>
          `;
        })
        .join('');

      return `
        <article class="cat-card cat-${escapeHtml(cat.id)}" data-reveal>
          <div class="cat-head">
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-name">${escapeHtml(cat.name)}</span>
            <span class="cat-count">${items.length} 件</span>
          </div>
          <p class="cat-desc">${escapeHtml(cat.desc)}</p>
          <ul class="cat-works">${worksHtml}</ul>
        </article>
      `;
    })
    .join('');
}

// ---------------------------------------------------------------------------
// 渲染：时间线
// ---------------------------------------------------------------------------
function renderTimeline() {
  const root = document.getElementById('timeline-list');

  root.innerHTML = timeline
    .map(
      (t) => `
      <li data-reveal>
        <span class="tl-year">${escapeHtml(t.year)}</span>
        <h3 class="tl-title">${escapeHtml(t.title)}</h3>
        <p class="tl-desc">${escapeHtml(t.desc)}</p>
      </li>
    `
    )
    .join('');
}

// ---------------------------------------------------------------------------
// 渲染：About + Contact
// ---------------------------------------------------------------------------
function renderAbout() {
  document.getElementById('about-title').textContent = `关于 ${profile.name}`;
  document.getElementById('about-body').textContent =
    '工程师 / 写作者 / 业余画手。把零散的想法沉淀成书、课和工具。' +
    '这个页面是所有作品的索引 — 旧的在更新，新的在建，欢迎常回来看看。';

  const meta = document.getElementById('about-meta');
  meta.innerHTML = `
    <li><span class="k">Role</span><span>${escapeHtml(profile.role)}</span></li>
    <li><span class="k">Where</span><span>${escapeHtml(profile.location)}</span></li>
    <li><span class="k">GitHub</span><a href="${escapeHtml(profile.github)}" target="_blank" rel="noopener">@${escapeHtml(profile.name)}</a></li>
    <li><span class="k">Email</span><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></li>
  `;

  const contact = document.getElementById('contact-list');
  contact.innerHTML = `
    <li><a href="${escapeHtml(profile.github)}" target="_blank" rel="noopener"><span class="ico">gh</span>GitHub · @${escapeHtml(profile.name)}</a></li>
    <li><a href="mailto:${escapeHtml(profile.email)}"><span class="ico">@</span>${escapeHtml(profile.email)}</a></li>
    <li><a href="#categories"><span class="ico">→</span>所有作品索引</a></li>
    <li><a href="#timeline"><span class="ico">↗</span>演进时间线</a></li>
  `;
}

// ---------------------------------------------------------------------------
// 渲染：Footer
// ---------------------------------------------------------------------------
function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById('footer-copy').textContent = `© ${year} ${profile.name}`;
  document.getElementById('footer-quote').textContent = profile.quote;
}

// ---------------------------------------------------------------------------
// 主题切换
// ---------------------------------------------------------------------------
const THEME_KEY = 'portfolio-hub-theme';

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
  // 更新 meta theme-color
  const meta = document.querySelector('meta[name="theme-color"]:not([media])');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (_) {}
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ---------------------------------------------------------------------------
// Topbar 滚动样式
// ---------------------------------------------------------------------------
function initTopbarScroll() {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  const onScroll = () => bar.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---------------------------------------------------------------------------
// 视口出现动画（IntersectionObserver）
// ---------------------------------------------------------------------------
function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // 错位淡入
          setTimeout(() => entry.target.classList.add('is-visible'), idx * 60);
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );
  targets.forEach((el) => io.observe(el));
}

// ---------------------------------------------------------------------------
// 启动
// ---------------------------------------------------------------------------
function boot() {
  renderHero();
  renderStatus();
  renderFeatured();
  renderCategories();
  renderTimeline();
  renderAbout();
  renderFooter();

  initTheme();
  initTopbarScroll();
  initReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
