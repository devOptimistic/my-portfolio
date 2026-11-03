export type Lang = 'fa' | 'en';

/** A string available in every supported language. */
export type Localized = Readonly<Record<Lang, string>>;

export type ContactKind = 'email' | 'github' | 'linkedin' | 'phone';

export interface Contact {
  kind: ContactKind;
  label: Localized;
  /** Omit for plain (non-clickable) pills such as a phone number placeholder. */
  href?: string;
}

export interface ProfilePhoto {
  /** Path relative to the site root, e.g. 'images/profile.webp' (file lives in public/images). */
  src: string;
  alt: Localized;
}

export interface Profile {
  name: Localized;
  title: Localized;
  /** Optional circular photo in the hero. Omit it and the hero renders without a photo. */
  photo?: ProfilePhoto;
  contacts: readonly Contact[];
}

export interface Seo {
  title: Localized;
  description: Localized;
  /** Canonical site URL, used for Open Graph and JSON-LD. */
  url: string;
  /** Social share image, relative to the site root. Optional. */
  image?: string;
}

export interface Job {
  title: Localized;
  company: Localized;
  period: Localized;
  subtitle: Localized;
  bullets: readonly Bullet[];
}

export interface Bullet {
  text: Localized;
  children?: readonly Localized[];
}

export interface Skill {
  label: string;
  hot?: boolean;
}

export interface SkillGroup {
  title: Localized;
  skills: readonly Skill[];
}

export interface Project {
  title: Localized;
  description: Localized;
  tech: readonly Skill[];
  demoUrl: string;
  sourceUrl: string;
  /** Screenshot path relative to the site root. A gradient placeholder is shown when omitted. */
  image?: string;
}

export interface UiLabels {
  switchLanguage: Localized;
  savePdf: Localized;
  toggleTheme: Localized;
  liveDemo: Localized;
  source: Localized;
  skipToContent: Localized;
  sections: Readonly<
    Record<'summary' | 'experience' | 'skills' | 'projects' | 'education', Localized>
  >;
}

export interface Resume {
  seo: Seo;
  profile: Profile;
  summary: Localized;
  experience: readonly Job[];
  skillGroups: readonly SkillGroup[];
  projects: readonly Project[];
  education: readonly Localized[];
  ui: UiLabels;
}
