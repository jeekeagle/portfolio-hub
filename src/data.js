// ---------------------------------------------------------------------------
// 内容数据：分类 + 作品 + 状态 + 时间线
// 修改这里就更新整个站点。
// ---------------------------------------------------------------------------

export const profile = {
  name: 'jeekeagle',
  nameDisplay: 'jeekeagle.',
  version: 'Apple 1.0',
  versionDate: '2026-06-15',
  eyebrow: '个人作品集 · Personal Works',
  tagline: 'Books. Art. Tools. Courses. — 一份持续更新的创作索引。',
  signature: '写三千年旧书，做一点新东西。',
  github: 'https://github.com/jeekeagle',
  email: 'hi@example.com', // ← 改成你的邮箱
  location: '地球某时区',
  role: '独立创作者 / 工程师',
  quote: '人心惟危，道心惟微；惟精惟一，允执厥中。',
};

export const now = {
  label: 'Now',
  text: '打磨《管理者的十六字心法》新版 + 课程《管理者的第一课》大纲',
  meta: '下一批公开 · 2026 夏',
};

// ---------------------------------------------------------------------------
// 分类 —— 每页对应一个
// 字段：id / name(英) / nameZh / hero 副标 / 强调色
// ---------------------------------------------------------------------------
export const categories = [
  {
    id: 'books',
    name: 'Books',
    nameZh: '书籍',
    subtitle: '写得很慢的书。已上线与在建的。',
    accent: '#5A2A2A',
  },
  {
    id: 'blog',
    name: 'Notes',
    nameZh: '博客',
    subtitle: '想法周记、读书摘录、零碎思考。',
    accent: '#0a4d68',
  },
  {
    id: 'art',
    name: 'Art',
    nameZh: '画作',
    subtitle: '山水小品、城市速写、封面设计。',
    accent: '#1f3a2e',
  },
  {
    id: 'courses',
    name: 'Courses',
    nameZh: '课程',
    subtitle: '从书里长出来的课。2026 启动。',
    accent: '#4b2e83',
  },
  {
    id: 'tools',
    name: 'Tools',
    nameZh: '工具',
    subtitle: '给创作者用的小工具。',
    accent: '#1a4480',
  },
  {
    id: 'essays',
    name: 'Essays',
    nameZh: '随笔',
    subtitle: '杂文、观影手记。',
    accent: '#5a4a2e',
  },
  {
    id: 'lab',
    name: 'Lab',
    nameZh: '实验',
    subtitle: '还没定型的半成品。',
    accent: '#2a2a2a',
  },
];

// 导航顺序：home + 7 分类 + about
export const navOrder = [
  { id: 'home', label: 'Home', href: './index.html' },
  { id: 'books', label: 'Books', href: './books.html' },
  { id: 'blog', label: 'Notes', href: './blog.html' },
  { id: 'art', label: 'Art', href: './art.html' },
  { id: 'courses', label: 'Courses', href: './courses.html' },
  { id: 'tools', label: 'Tools', href: './tools.html' },
  { id: 'essays', label: 'Essays', href: './essays.html' },
  { id: 'about', label: 'About', href: './about.html' },
];

// ---------------------------------------------------------------------------
// 作品 —— 每条带 category 标记，所属页用 category 过滤
// ---------------------------------------------------------------------------
export const works = [
  // ---------- Books ----------
  {
    id: 'mg-16',
    category: 'books',
    title: '管理者的十六字心法',
    subtitle: 'A Manager’s Sixteen-Word Heart Method',
    desc: '三千年中国制度史照见今天的管理困境。已上线，可在线阅读。',
    url: 'https://jeekeagle.github.io/mg-16-code/',
    year: 2026,
    status: 'Live',
    featured: true,
    accent: '#5A2A2A',
  },
  {
    id: 'shiji',
    category: 'books',
    title: '史记精读',
    subtitle: 'Reading the Shiji',
    desc: '逐篇细读《史记》，一年一篇，慢功夫。',
    url: '#',
    year: 2025,
    status: 'In Progress',
    accent: '#7a3b1d',
  },
  {
    id: 'daode',
    category: 'books',
    title: '道德经今注',
    subtitle: 'Dao De Jing, A New Reading',
    desc: '一章一注，写给当代读者的《道德经》。',
    url: '#',
    year: 2025,
    status: 'In Progress',
    accent: '#3b5a3b',
  },
  {
    id: 'song',
    category: 'books',
    title: '宋朝的日常',
    subtitle: 'Daily Life in the Song Dynasty',
    desc: '从笔记小说里看一个朝代怎么过日子。',
    url: '#',
    year: 2024,
    status: 'Draft',
    accent: '#3a4a6a',
  },

  // ---------- Blog ----------
  {
    id: 'weekly',
    category: 'blog',
    title: '想法周记',
    subtitle: 'Weekly Notes',
    desc: '每周一篇，把脑子里没整理好的东西倒出来。',
    url: '#',
    year: 2024,
    status: 'Ongoing',
    accent: '#0a4d68',
    posts: [
      { date: '2026-06-08', title: 'No. 92 · 慢即是快' },
      { date: '2026-06-01', title: 'No. 91 · 重读《管理者的十六字》' },
      { date: '2026-05-25', title: 'No. 90 · 一个工具的诞生' },
      { date: '2026-05-18', title: 'No. 89 · 关于「状态」' },
      { date: '2026-05-11', title: 'No. 88 · 阅读的速度' },
    ],
  },
  {
    id: 'reading',
    category: 'blog',
    title: '读书摘录',
    subtitle: 'Reading Excerpts',
    desc: '只放让我停下来想的那一段。',
    url: '#',
    year: 2024,
    status: 'Ongoing',
    accent: '#2a4a5a',
    posts: [
      { date: '2026-05-30', title: '《史记·货殖列传》' },
      { date: '2026-05-10', title: '《人间词话》节选' },
      { date: '2026-04-22', title: '《管锥编》一则' },
    ],
  },

  // ---------- Art ----------
  {
    id: 'landscape',
    category: 'art',
    title: '山水小品',
    subtitle: 'Landscapes',
    desc: '临古不泥古，用水墨记下眼前的山。',
    url: '#',
    year: 2025,
    status: 'Series',
    accent: '#1f3a2e',
  },
  {
    id: 'city',
    category: 'art',
    title: '城市速写',
    subtitle: 'City Sketches',
    desc: '出差包里永远有一支针管笔。',
    url: '#',
    year: 2025,
    status: 'Series',
    accent: '#2a2a3a',
  },
  {
    id: 'cover',
    category: 'art',
    title: '封面设计集',
    subtitle: 'Book Covers',
    desc: '给自己的书和别人的书做封面。',
    url: '#',
    year: 2025,
    status: 'Series',
    accent: '#3a2a2a',
  },

  // ---------- Courses ----------
  {
    id: 'course-mgmt',
    category: 'courses',
    title: '管理者的第一课',
    subtitle: 'A Manager’s First Course',
    desc: '从《十六字心法》脱胎的第一门课。',
    url: '#',
    year: 2026,
    status: '筹备 · 2026 夏',
    featured: true,
    accent: '#4b2e83',
  },
  {
    id: 'course-classics',
    category: 'courses',
    title: '国学十二讲',
    subtitle: 'Twelve Lectures on the Classics',
    desc: '为忙碌的成年人挑选的十二个母题。',
    url: '#',
    year: 2026,
    status: '筹备 · 2026 秋',
    accent: '#5a3a8a',
  },
  {
    id: 'course-write',
    category: 'courses',
    title: '写作工坊',
    subtitle: 'Writing Workshop',
    desc: '把脑子里一团雾的东西写成能读的文章。',
    url: '#',
    year: 2026,
    status: '筹备 · 2026 冬',
    accent: '#3a4a6a',
  },

  // ---------- Tools ----------
  {
    id: 'book-to-site',
    category: 'tools',
    title: 'book_to_site',
    subtitle: 'Markdown → Reading Site',
    desc: '一键把 Markdown 书稿做成可部署的阅读站。',
    url: '#',
    year: 2025,
    status: 'Open Source',
    featured: true,
    accent: '#1a4480',
  },
  {
    id: 'note-sync',
    category: 'tools',
    title: '笔记同步器',
    subtitle: 'Note Sync',
    desc: '把碎片笔记同步到一个本地 Markdown 库。',
    url: '#',
    year: 2025,
    status: 'Beta',
    accent: '#2a5a8a',
  },
  {
    id: 'trans-helper',
    category: 'tools',
    title: '翻译小工具',
    subtitle: 'Translation Helper',
    desc: '给长中文段落做英译辅助。',
    url: '#',
    year: 2025,
    status: 'Beta',
    accent: '#3a6a8a',
  },

  // ---------- Essays ----------
  {
    id: 'misc',
    category: 'essays',
    title: '杂文集',
    subtitle: 'Miscellany',
    desc: '不成系列，但偶尔会写的那些。',
    url: '#',
    year: 2024,
    status: 'Ongoing',
    accent: '#5a4a2e',
    posts: [
      { date: '2026-04-12', title: '夜里走路' },
      { date: '2026-02-20', title: '咖啡馆的隔音' },
      { date: '2026-01-05', title: '为什么记笔记' },
    ],
  },
  {
    id: 'film',
    category: 'essays',
    title: '观影手记',
    subtitle: 'Film Notes',
    desc: '一年大概只挑十部认真看。',
    url: '#',
    year: 2024,
    status: 'Ongoing',
    accent: '#3a2a2a',
    posts: [
      { date: '2026-03-18', title: '《一一》重看' },
      { date: '2025-12-09', title: '《花样年华》' },
    ],
  },
];

// 演进时间线
export const timeline = [
  { year: '2024 Q1', title: '开笔《十六字心法》',     desc: '从三千年制度史里找今天的管理答案。' },
  { year: '2024 Q3', title: '「想法周记」上线',         desc: '逼自己每周写一篇，倒逼思考。' },
  { year: '2025 Q1', title: 'book_to_site 开源',        desc: '把书稿一键变网站的工具。' },
  { year: '2025 Q2', title: '画作系列启动',             desc: '水墨小品、城市速写同步更新。' },
  { year: '2025 Q4', title: '课程规划启动',             desc: '《管理者的第一课》开始写大纲。' },
  { year: '2026 Q1', title: '《十六字心法》定稿上线',   desc: '在线阅读版部署到 GitHub Pages。' },
  { year: '2026 Q2', title: '作品集 Hub 上线',          desc: '你正在看的这个站点。' },
];

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
export const catById = (id) => categories.find((c) => c.id === id);
export const worksByCat = (id) => works.filter((w) => w.category === id);
export const featuredOf = (id) => worksByCat(id).filter((w) => w.featured);
