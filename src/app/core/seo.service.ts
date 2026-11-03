import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RESUME } from '../data/resume.data';
import { Lang } from '../models/resume.models';
import { stripMarkup } from '../shared/rich-text/rich-text';
import { LanguageService } from './language.service';

const OG_LOCALE: Readonly<Record<Lang, string>> = { fa: 'fa_IR', en: 'en_US' };
const JSON_LD_ID = 'person-json-ld';

/** Keeps <title>, meta/OG tags and the JSON-LD Person schema in sync with the active language. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly language = inject(LanguageService);

  constructor() {
    effect(() => this.update(this.language.lang()));
  }

  private update(lang: Lang): void {
    const { seo, profile } = RESUME;
    const title = seo.title[lang];
    const description = seo.description[lang];

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: seo.url });
    this.meta.updateTag({ property: 'og:locale', content: OG_LOCALE[lang] });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    const imagePath = profile.photo?.src ?? seo.image;
    const image = imagePath ? new URL(imagePath, seo.url).href : undefined;
    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
    }

    const sameAs = profile.contacts
      .filter((c) => c.kind === 'github' || c.kind === 'linkedin')
      .map((c) => c.href)
      .filter((href): href is string => !!href);
    const email = profile.contacts.find((c) => c.kind === 'email')?.href;

    this.writeJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: stripMarkup(profile.name[lang]),
      jobTitle: profile.title[lang],
      description,
      url: seo.url,
      inLanguage: lang,
      ...(image ? { image } : {}),
      ...(email ? { email } : {}),
      ...(sameAs.length ? { sameAs } : {}),
    });
  }

  private writeJsonLd(data: Record<string, unknown>): void {
    let script = this.document.getElementById(JSON_LD_ID);
    if (!script) {
      script = this.document.createElement('script');
      script.id = JSON_LD_ID;
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
