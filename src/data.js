// ---------------------------------------------------------------------------
// 个人作品集 · 内容数据源
// 改这里就能更新整个 Hub。新增作品只需在 works 数组里加一条。
// ---------------------------------------------------------------------------

export const profile = {
  name: 'jeekeagle',
  eyebrow: '个人作品集 · Personal Works',
  tagline: '读三千年旧书，做一点新东西。\n书 · 画 · 课 · 工具 — 一条慢慢生长的轨迹。',
  github: 'https://github.com/jeekeagle',
  email: 'hi@example.com', // ← 改成你的邮箱
  location: '地球上某个时区',
  role: '独立创作者 / 工程师',
  quote: '人心惟危，道心惟微；惟精惟一，允执厥中。',
};

export const now = {
  label: '正在做',
  text: '打磨《管理者的十六字心法》新版 + 课程《管理者的第一课》大纲',
  meta: '下一批公开：2026 夏',
};

// ---------------------------------------------------------------------------
// 分类定义：图标用 unicode 几何符号，避免加载图标库
// ---------------------------------------------------------------------------
export const categories = [
  { id: 'book',   name: '书籍',  icon: '◐', desc: '一手写就的电子书，已上线或在建。' },
  { id: 'blog',   name: '博客',  icon: '✎', desc: '想法周记、读书摘录、零碎思考。' },
  { id: 'art',    name: '画作',  icon: '◈', desc: '山水小品、城市速写、封面设计。' },
  { id: 'course', name: '课程',  icon: '◇', desc: '从书里长出来的课，正在筹备。' },
  { id: 'tool',   name: '工具',  icon: '◭', desc: '给创作者用的小工具。' },
  { id: 'essay',  name: '随笔',  icon: '◦', desc: '杂文、观影手记、偶尔的评论。' },
  { id: 'lab',    name: '实验',  icon: '⬡', desc: '还没定型的半成品，欢迎围观。' },
];

// ---------------------------------------------------------------------------
// 作品列表：url 留空或用 # 代表暂未上线
// ---------------------------------------------------------------------------
export const works = [
  // ---------- 书籍 ----------
  {
    id: 'mg-16',
    category: 'book',
    title: '管理者的十六字心法',
    desc: '三千年中国制度史照见今天的管理困境。已上线，可在线阅读。',
    url: 'https://jeekeagle.github.io/mg-16-code/',
    year: 2026,
    status: '已上线',
    featured: true,
    accent: '#5A2A2A',
  },
  {
    id: 'shiji',
    category: 'book',
    title: '史记精读',
    desc: '逐篇细读《史记》，一年一篇，慢功夫。',
    url: '#',
    year: 2025,
    status: '在建',
  },
  {
    id: 'daode',
    category: 'book',
    title: '道德经今注',
    desc: '一章一注，写给当代读者的《道德经》。',
    url: '#',
    year: 2025,
    status: '在建',
  },
  {
    id: 'song',
    category: 'book',
    title: '宋朝的日常',
    desc: '从笔记小说里看一个朝代怎么过日子。',
    url: '#',
    year: 2024,
    status: '草稿',
  },

  // ---------- 博客 ----------
  {
    id: 'weekly',
    category: 'blog',
    title: '想法周记',
    desc: '每周一篇，把脑子里没整理好的东西倒出来。',
    url: '#',
    year: 2024,
    status: '更新中',
    featured: true,
  },
  {
    id: 'reading',
    category: 'blog',
    title: '读书摘录',
    desc: '只放让我停下来想的那一段。',
    url: '#',
    year: 2024,
    status: '更新中',
  },

  // ---------- 画作 ----------
  {
    id: 'landscape',
    category: 'art',
    title: '山水小品',
    desc: '临古不泥古，用水墨记下眼前的山。',
    url: '#',
    year: 2025,
    status: '作品集',
    featured: true,
  },
  {
    id: 'city',
    category: 'art',
    title: '城市速写',
    desc: '出差包里永远有一支针管笔。',
    url: '#',
    year: 2025,
    status: '作品集',
  },
  {
    id: 'cover',
    category: 'art',
    title: '封面设计集',
    desc: '给自己的书和别人的书做封面。',
    url: '#',
    year: 2025,
    status: '作品集',
  },

  // ---------- 课程 ----------
  {
    id: 'course-mgmt',
    category: 'course',
    title: '管理者的第一课',
    desc: '从《十六字心法》脱胎的第一门课。',
    url: '#',
    year: 2026,
    status: '筹备',
    featured: true,
  },
  {
    id: 'course-classics',
    category: 'course',
    title: '国学十二讲',
    desc: '为忙碌的成年人挑选的十二个母题。',
    url: '#',
    year: 2026,
    status: '筹备',
  },
  {
    id: 'course-write',
    category: 'course',
    title: '写作工坊',
    desc: '把脑子里一团雾的东西写成能读的文章。',
    url: '#',
    year: 2026,
    status: '筹备',
  },

  // ---------- 工具 ----------
  {
    id: 'book-to-site',
    category: 'tool',
    title: 'book_to_site',
    desc: '一键把 Markdown 书稿做成可部署的阅读站。',
    url: '#',
    year: 2025,
    status: '开源',
    featured: true,
  },
  {
    id: 'note-sync',
    category: 'tool',
    title: '笔记同步器',
    desc: '把碎片笔记同步到一个本地 Markdown 库。',
    url: '#',
    year: 2025,
    status: '内测',
  },
  {
    id: 'trans-helper',
    category: 'tool',
    title: '翻译小工具',
    desc: '给长中文段落做英译辅助。',
    url: '#',
    year: 2025,
    status: '内测',
  },

  // ---------- 随笔 ----------
  {
    id: 'misc',
    category: 'essay',
    title: '杂文集',
    desc: '不成系列，但偶尔会写的那些。',
    url: '#',
    year: 2024,
    status: '更新中',
  },
  {
    id: 'film',
    category: 'essay',
    title: '观影手记',
    desc: '一年大概只挑十部认真看。',
    url: '#',
    year: 2024,
    status: '更新中',
  },

  // ---------- 实验 ----------
  {
    id: 'lab',
    category: 'lab',
    title: '实验场',
    desc: '还没定型的小项目，未必会做完。',
    url: '#',
    year: 2026,
    status: '进行中',
  },
];

// ---------------------------------------------------------------------------
// 演进时间线
// ---------------------------------------------------------------------------
export const timeline = [
  { year: '2024 Q1', title: '开笔《十六字心法》',     desc: '从三千年制度史里找今天的管理答案。' },
  { year: '2024 Q3', title: '「想法周记」上线',         desc: '逼自己每周写一篇，倒逼思考。' },
  { year: '2025 Q1', title: 'book_to_site 开源',        desc: '把书稿一键变网站的工具。' },
  { year: '2025 Q2', title: '画作系列启动',             desc: '水墨小品、城市速写同步更新。' },
  { year: '2025 Q4', title: '课程规划启动',             desc: '《管理者的第一课》开始写大纲。' },
  { year: '2026 Q1', title: '《十六字心法》定稿上线',   desc: '在线阅读版部署到 GitHub Pages。' },
  { year: '2026 Q2', title: '作品集 Hub 上线',          desc: '你正在看的这个页面。' },
];

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
export const featured = () => works.filter((w) => w.featured);

export const worksByCategory = (catId) => works.filter((w) => w.category === catId);
