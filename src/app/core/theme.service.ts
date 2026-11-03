import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { readStorage, writeStorage } from './safe-storage';

export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'resume-theme';

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark';
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly _theme = signal<Theme>(this.initialTheme());
  readonly theme = this._theme.asReadonly();

  constructor() {
    effect(() => {
      this.document.documentElement.setAttribute('data-theme', this._theme());
    });
  }

  toggle(): void {
    const next: Theme = this._theme() === 'dark' ? 'light' : 'dark';
    this._theme.set(next);
    writeStorage(THEME_STORAGE_KEY, next);
  }

  private initialTheme(): Theme {
    const saved = readStorage(THEME_STORAGE_KEY);
    if (isTheme(saved)) {
      return saved;
    }
    const prefersDark =
      typeof window === 'undefined'
        ? false
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
}
