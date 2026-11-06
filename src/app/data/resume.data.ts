import { Resume } from '../models/resume.models';

/**
 * ALL resume content lives here.
 *
 * Inline markup supported in any string:
 *   **bold**              -> bold text
 *   [[TODO: placeholder]] -> highlighted placeholder (search this file for "TODO" to find them all)
 */
export const RESUME: Resume = {
  seo: {
    title: {
      fa: 'محمدجواد بیاتانی',
      en: 'Mohammad Javad Bayatani',
    },
    description: {
      fa: 'رزومه‌ی توسعه‌دهنده‌ی ارشد فرانت‌اند (Angular) با بیش از ۵ سال تجربه در اپلیکیشن‌های سازمانی.',
      en: 'Resume of a Senior Frontend Developer (Angular) with 5+ years of enterprise experience.',
    },
    // TODO: replace with the real address where the site will be hosted
    url: 'https://mohammadbayatani.ir/',
  },

  profile: {
    name: {
      fa: 'محمدجواد بیاتانی',
      en: 'Mohammadjavad Bayatani',
    },
    title: {
      fa: 'Senior Frontend Developer · Angular',
      en: 'Senior Frontend Developer · Angular',
    },
    // photo: {
    //   src: 'images/profile.jpg',
    //   alt: {
    //     fa: 'عکس پروفایل محمدجواد بیاتانی',
    //     en: 'Profile photo of Mohammadjavad Bayatani',
    //   },
    // },
    contacts: [
      {
        kind: 'email',
        label: { fa: 'mohammad.bayatani.dev@gmail.com', en: 'mohammad.bayatani.dev@gmail.com' },
        // TODO: real email address
        href: 'mailto:mohammad.bayatani.dev@gmail.com',
      },
      {
        kind: 'github',
        label: { fa: 'GitHub', en: 'GitHub' },
        // TODO: real GitHub profile
        href: 'https://github.com/devOptimistic',
      },
      {
        kind: 'linkedin',
        label: { fa: 'LinkedIn', en: 'LinkedIn' },
        // TODO: real LinkedIn profile
        href: 'https://www.linkedin.com/in/mohammad-bayatani-b631b4252/',
      },
      {
        kind: 'phone',
        label: { fa: '+98 901 133 4094', en: '+98 901 133 4094' },
      },
    ],
  },

  summary: {
    fa: 'توسعه‌دهنده‌ی فرانت‌اند با بیش از ۵ سال تجربه در ساخت و نگهداری اپلیکیشن‌های سازمانی با Angular. بازنویسی تک‌نفره‌ی یک CRM پرکاربر از AngularJS به Angular مدرن و ریفکتور گسترده‌ی کدبیس، و مالکیت کامل لایه‌ی فرانت‌اند از تصمیم‌گیری معماری تا تحویل در production. مسلط به Angular 12 تا 22 شامل Standalone Components، Signals و Control Flow جدید.',
    en: 'Frontend developer with 5+ years of experience building and maintaining enterprise Angular applications. Independently rewrote a high-traffic CRM from AngularJS to modern Angular and refactored the codebase, owning the frontend end to end, from architectural decisions to production delivery. Proficient in Angular 12 through 22, including Standalone Components, Signals, and the new control flow.',
  },

  experience: [
    {
      title: {
        fa: 'Senior Frontend Developer (Angular)',
        en: 'Senior Frontend Developer (Angular)',
      },
      company: {
        fa: 'نوآوران اکسیس (BRE)',
        en: 'BRE',
      },
      period: { fa: '۵ سال تا امروز', en: '5 years – Present' },
      subtitle: {
        fa: 'پلتفرم CRM برای یک سازمان صادرات، واردات و پست بین‌المللی',
        en: 'CRM platform for an import/export and international postal organization',
      },
      bullets: [
        {
          text: {
            fa: 'بازنویسی **تک‌نفره‌ی** یک CRM سازمانی پرکاربر از AngularJS به Angular 12 (نوشتن مجدد با معماری مدرن) و ریفکتور کدها در حدود یک سال؛ انتقال **۸۰٪** کدبیس',
            en: 'Independently rewrote a high-traffic enterprise CRM from AngularJS to Angular 12 with a modern architecture, refactoring legacy code over ~1 year; **80%** of the codebase delivered',
          },
        },
        {
          text: {
            fa: 'بهبود سرعت بارگذاری، زمان build و پایداری اپلیکیشن پس از بازنویسی، همراه با کاهش باگ‌ها و افزایش سرعت توسعه',
            en: 'Improved load performance, build times, and stability after the rewrite, reducing bug volume and speeding up development',
          },
        },
        {
          text: {
            fa: 'طراحی و پیاده‌سازی ماژول‌های کلیدی CRM با Angular، RxJS و TypeScript:',
            en: 'Designed and delivered key CRM modules using Angular, RxJS, and TypeScript:',
          },
          children: [
            {
              fa: 'ماژول **صادرات** (پیاده‌سازی کامل فرایندها)',
              en: '**Export management module** (end-to-end workflows)',
            },
            {
              fa: 'سیستم **چت اختصاصی** سازمان برای ارتباط بین کارکنان',
              en: 'Internal **chat system** for organization staff',
            },
            {
              fa: 'سیستم **تیکتینگ**، نظرات، پیشنهادات و اعلانات',
              en: '**Ticketing**, feedback, suggestions, and announcements system',
            },
            {
              fa: 'سامانه‌ی **رزرو غذا** و ماژول **نظرسنجی**',
              en: '**Meal reservation** system and **survey** module',
            },
          ],
        },
        {
          text: {
            fa: 'مسئولیت کامل لایه‌ی فرانت‌اند به‌عنوان تنها توسعه‌دهنده‌ی فرانت‌اند؛ تصمیم‌گیری معماری و فنی و همکاری روزانه با تیم‌لید و تیم بک‌اند',
            en: 'Sole frontend engineer, owning frontend architecture and technical decisions while collaborating daily with the full-stack lead and backend team',
          },
        },
        {
          text: {
            fa: 'توسعه و نگهداری همزمان **۳ پروژه‌ی مستقل** با اولویت‌بندی و تحویل به‌موقع',
            en: 'Concurrently developed and maintained **3 independent projects**, balancing priorities and delivering on schedule',
          },
        },
      ],
    },
  ],

  skillGroups: [
    {
      title: { fa: 'Angular Core', en: 'Angular Core' },
      skills: [
        { label: 'Angular 1 → 22', hot: true },
        { label: 'AngularJS', hot: true },
        { label: 'Standalone Components', hot: true },
        { label: 'Signals', hot: true },
        { label: 'Control Flow (@if / @for / @defer)', hot: true },
        { label: 'Dependency Injection' },
        { label: 'Change Detection (OnPush)' },
        { label: 'Router · Guards · Resolvers' },
        { label: 'Reactive & Template Forms' },
        { label: 'HTTP Interceptors' },
        { label: 'Lazy Loading' },
        { label: 'Custom Directives & Pipes' },
        { label: 'Content Projection' },
        { label: 'SSR & Hydration' },
        { label: 'i18n' },
      ],
    },
    {
      title: { fa: 'RxJS و مدیریت state', en: 'RxJS & State Management' },
      skills: [
        { label: 'RxJS Operators & Higher-order Mapping' },
        { label: 'Subjects & Multicasting' },
        { label: 'Memory-leak Prevention' },
        { label: 'NgRx (Store · Effects · Selectors)' },
        { label: 'NgRx SignalStore' },
        { label: 'ComponentStore' },
        { label: 'Signals ↔ RxJS Interop' },
      ],
    },
    {
      title: { fa: 'زبان‌ها', en: 'Languages' },
      skills: [
        { label: 'TypeScript (Strict · Generics · Utility Types)' },
        { label: 'JavaScript (ES6+)' },
        { label: 'HTML5' },
        { label: 'CSS3 · SCSS' },
      ],
    },
    {
      title: { fa: 'معماری', en: 'Architecture' },
      skills: [
        { label: 'Feature-based Architecture' },
        { label: 'SOLID & Clean Code' },
        { label: 'Micro-frontends (Module Federation)' },
        { label: 'Design Systems' },
        { label: 'Smart/Dumb Components' },
        { label: 'Monorepo (Nx)' },
      ],
    },
    {
      title: { fa: 'تست', en: 'Testing' },
      skills: [
        { label: 'Jest' },
        { label: 'Jasmine · Karma' },
        { label: 'Testing Library' },
        { label: 'Cypress' },
        { label: 'Playwright' },
      ],
    },
    {
      title: { fa: 'عملکرد و کیفیت', en: 'Performance & Quality' },
      skills: [
        { label: 'Core Web Vitals · Lighthouse' },
        { label: 'Bundle Analysis' },
        { label: 'Accessibility (WCAG)' },
        { label: 'ESLint · Prettier' },
        { label: 'Frontend Security (XSS · CSRF · JWT/OAuth)' },
      ],
    },
    {
      title: { fa: 'UI و استایل', en: 'UI & Styling' },
      skills: [
        { label: 'Angular Material & CDK' },
        { label: 'PrimeNG' },
        { label: 'Kendo UI' },
        { label: 'Tailwind CSS' },
        { label: 'Responsive Design' },
        { label: 'RTL / i18n' },
      ],
    },
    {
      title: { fa: 'API، ابزار و DevOps', en: 'APIs, Tooling & DevOps' },
      skills: [
        { label: 'REST' },
        { label: 'GraphQL' },
        { label: 'WebSocket' },
        { label: 'Git' },
        { label: 'CI/CD' },
        { label: 'Docker' },
        { label: 'Angular CLI · Vite/esbuild · Webpack' },
      ],
    },
    {
      title: { fa: 'بک‌اند (در حال یادگیری)', en: 'Backend (Learning)' },
      skills: [
        { label: 'C#' },
        { label: 'ASP.NET Core Web API' },
        { label: 'Entity Framework Core' },
      ],
    },
  ],

  // TODO: replace the three sample projects. Put screenshots in public/images and set `image`
  // (for example 'images/project-1.webp'). Replace '#' with the real demo and source URLs.
  projects: [
    {
      "title": { "fa": "فین‌ترک (FinTrack)", "en": "FinTrack" },
      "description": {
        "fa": "یک داشبورد مدیریت مالی شخصی (SaaS) برای ثبت، دسته‌بندی و تحلیل درآمد و هزینه‌ها، همراه با سیستم تعیین بودجه و پیگیری اهداف پس‌انداز.",
        "en": "A personal finance management SaaS dashboard for tracking, categorizing, and analyzing income and expenses, featuring budgeting and savings goal tracking."
      },
      "image":"images/fin-track-demo.jpg",
      "tech": [
        { "label": "Angular 22", "hot": true },
        { "label": "Signals", "hot": true },
        { "label": "Standalone", "hot": true },
        { "label": "Tailwind CSS" },
        { "label": "TypeScript" }
      ],
      "demoUrl": "https://fin-track.mohammadbayatani.ir",
      "sourceUrl": "https://github.com/devOptimistic/fin-track"
    },
    // {
    //   title: { fa: '[[TODO: نام پروژه ۲]]', en: '[[TODO: Project 2]]' },
    //   description: {
    //     fa: 'توضیح کوتاه یک‌ تا دو خطی درباره‌ی پروژه و مشکلی که حل می‌کند.',
    //     en: 'One or two lines about the project and the problem it solves.',
    //   },
    //   tech: [{ label: 'Angular 22', hot: true }, { label: 'NgRx SignalStore' }, { label: 'SCSS' }],
    //   demoUrl: '#',
    //   sourceUrl: '#',
    // },
    // {
    //   title: { fa: '[[TODO: نام پروژه ۳]]', en: '[[TODO: Project 3]]' },
    //   description: {
    //     fa: 'توضیح کوتاه یک‌ تا دو خطی درباره‌ی پروژه و مشکلی که حل می‌کند.',
    //     en: 'One or two lines about the project and the problem it solves.',
    //   },
    //   tech: [{ label: 'Angular 22', hot: true }, { label: 'RxJS' }, { label: 'Tailwind' }],
    //   demoUrl: '#',
    //   sourceUrl: '#',
    // },
  ],

  education: [
    {
      fa: 'کارشناسی ارشد مهندسی نرم افزار، دانشگاه آزاد اسلامی ملایر',
      en: 'Master of Science, Software Engineering, Azad University, Malayer',
    },
    {
      fa: 'کارشناسی مهندسی نرم افزار، دانشکده فنی و حرفه ای خوارزمی ملایر',
      en: 'Bachelor of Science in Software Engineering, Kharazmi Technical and Vocational College, Malayer',
    },
    {
      fa: 'کاردانی مهندسی نرم افزار، دانشکده فنی و حرفه ای شهید مهاجر اصفهان',
      en: "Associate's Degree in Software Engineering, Shahid Mohajer Technical and Vocational College, Isfahan",
    },
    {
      fa: 'انگلیسی: متوسط به بالا',
      en: 'English: Upper-Intermediate (B2) – Professional Reading and Writing',
    },
    {
      fa: 'وضعیت نظام وظیفه: دارای معافیت تحصیلی',
      en: 'Military service: Student deferment',
    },
  ],

  ui: {
    switchLanguage: { fa: 'English', en: 'فارسی' },
    savePdf: { fa: 'دانلود PDF', en: 'Download PDF' },
    toggleTheme: { fa: 'تغییر پوسته‌ی روشن/تاریک', en: 'Toggle light/dark theme' },
    liveDemo: { fa: 'دمو', en: 'Live demo' },
    source: { fa: 'سورس', en: 'Source' },
    skipToContent: { fa: 'پرش به محتوا', en: 'Skip to content' },
    sections: {
      summary: { fa: 'خلاصه‌ی حرفه‌ای', en: 'Professional Summary' },
      experience: { fa: 'تجربه‌ی کاری', en: 'Experience' },
      skills: { fa: 'مهارت‌های فنی', en: 'Technical Skills' },
      projects: { fa: 'پروژه‌های شخصی', en: 'Personal Projects' },
      education: { fa: 'تحصیلات و زبان', en: 'Education & Languages' },
    },
  },
};
