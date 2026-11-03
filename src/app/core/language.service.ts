import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Lang } from '../models/resume.models';
import { readStorage, writeStorage } from './safe-storage';

export const LANG_STORAGE_KEY = 'resume-lang';
const DEFAULT_LANG: Lang = 'fa';

function isLang(value: unknown): value is Lang {
  return value === 'fa' || value === 'en';
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  private readonly _lang = signal<Lang>(this.initialLang());
  readonly lang = this._lang.asReadonly();

  constructor() {
    effect(() => {
      const lang = this._lang();
      const root = this.document.documentElement;
      root.lang = lang;
      root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    });
  }

  set(lang: Lang): void {
    this._lang.set(lang);
    writeStorage(LANG_STORAGE_KEY, lang);
  }

  toggle(): void {
    this.set(this._lang() === 'fa' ? 'en' : 'fa');
  }

  private initialLang(): Lang {
    const saved = readStorage(LANG_STORAGE_KEY);
    return isLang(saved) ? saved : DEFAULT_LANG;
  }
}
