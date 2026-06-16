// ---------------------------------------------------------------------------
// Shared components: nav / footer / theme toggle / reveal animations
// ---------------------------------------------------------------------------
import { profile, navOrder } from './data.js';

// ---------------------------------------------------------------------------
// utils
// ---------------------------------------------------------------------------
const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const currentPageId = () => document.body.dataset.page || 'home';

const isExternal = (url = '') => /^https?:\/\//.test(url);
const isLive = (url = '') => url && url !== '#' && isExternal(url);

// ---------------------------------------------------------------------------
// nav
// ---------------------------------------------------------------------------
export function renderNav() {
  const root = document.getElementById('nav-root');
  if (!root) return;

  const here = currentPageId();
  const linksHtml = navOrder
    .map((n) => {
      const isActive = n.id === here;
      return `<a href="${escapeHtml(n.href)}" class="${isActive ? 'active' : ''}">${escapeHtml(n.label)}</a>`;
    })
    .join('');

  root.innerHTML = `
    <nav class="nav" id="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="./index.html" aria-label="返回首页">
          <span class="nav-brand-mark" aria-hidden="true"></span>
          <span>${escapeHtml(profile.name)}</span>
          ${profile.version ? `<span class="nav-version" title="${escapeHtml(profile.version)} · ${escapeHtml(profile.versionDate || '')}">${escapeHtml(profile.version)}</span>` : ''}
        </a>
        <div class="nav-list">${linksHtml}</div>
        <div class="nav-actions">
          <button class="theme-toggle" type="button" aria-label="切换明暗主题" id="theme-toggle">
            <svg class="icon-sun" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor"/>
              <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="12" y1="2" x2="12" y2="5"/>
                <line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="5" y2="12"/>
                <line x1="19" y1="12" x2="22" y2="12"/>
                <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/>
                <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/>
                <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/>
                <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/>
              </g>
            </svg>
            <svg class="icon-moon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `;

  // sticky scroll state
  const bar = document.getElementById('nav');
  const onScroll = () => bar.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---------------------------------------------------------------------------
// footer
// ---------------------------------------------------------------------------
export function renderFooter() {
  const root = document.getElementById('footer-root');
  if (!root) return;

  const year = new Date().getFullYear();
  root.innerHTML = `
    <footer class="footer">
      <div class="container container-wide">
        <div class="footer-cols">
          <div>
            <div class="footer-brand">${escapeHtml(profile.name)}.</div>
            <p class="footer-tagline">${escapeHtml(profile.signature)}</p>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Works</div>
            <ul>
              <li><a href="./books.html">Books</a></li>
              <li><a href="./blog.html">Notes</a></li>
              <li><a href="./art.html">Art</a></li>
              <li><a href="./tools.html">Tools</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">More</div>
            <ul>
              <li><a href="./courses.html">Courses</a></li>
              <li><a href="./essays.html">Essays</a></li>
              <li><a href="./about.html">About</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Elsewhere</div>
            <ul>
              <li><a href="${escapeHtml(profile.github)}" target="_blank" rel="noopener">GitHub ↗</a></li>
              <li><a href="mailto:${escapeHtml(profile.email)}">Email</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${year} ${escapeHtml(profile.name)} · ${escapeHtml(profile.quote)}</span>
          <span>${escapeHtml(profile.version || '')}${profile.versionDate ? ` · ${escapeHtml(profile.versionDate)}` : ''}</span>
        </div>
      </div>
    </footer>
  `;
}

// ---------------------------------------------------------------------------
// theme toggle
// ---------------------------------------------------------------------------
const THEME_KEY = 'portfolio-hub-theme';

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
  const meta = document.querySelector('meta[name="theme-color"]:not([media])');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
}

export function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (_) {}
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#theme-toggle');
    if (!btn) return;
    const current = document.documentElement.dataset.theme;
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ---------------------------------------------------------------------------
// reveal animations
// ---------------------------------------------------------------------------
export function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-visible'), i * 50);
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.04 }
  );
  targets.forEach((el) => io.observe(el));
}

// ---------------------------------------------------------------------------
// exports
// ---------------------------------------------------------------------------
export { escapeHtml, isLive };
