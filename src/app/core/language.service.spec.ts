import { TestBed } from '@angular/core/testing';
import { LANG_STORAGE_KEY, LanguageService } from './language.service';

describe('LanguageService', () => {
  const create = (): LanguageService => {
    TestBed.resetTestingModule();
    return TestBed.inject(LanguageService);
  };

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('lang');
    document.documentElement.removeAttribute('dir');
  });

  it('defaults to Persian', () => {
    expect(create().lang()).toBe('fa');
  });

  it('restores a saved language', () => {
    localStorage.setItem(LANG_STORAGE_KEY, 'en');
    expect(create().lang()).toBe('en');
  });

  it('ignores an invalid saved value', () => {
    localStorage.setItem(LANG_STORAGE_KEY, 'de');
    expect(create().lang()).toBe('fa');
  });

  it('toggles, persists, and updates <html> lang and dir', () => {
    const service = create();
    TestBed.tick();
    expect(document.documentElement.lang).toBe('fa');
    expect(document.documentElement.dir).toBe('rtl');

    service.toggle();
    TestBed.tick();

    expect(service.lang()).toBe('en');
    expect(localStorage.getItem(LANG_STORAGE_KEY)).toBe('en');
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
  });

  it('still works when storage throws', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const service = create();
    expect(service.lang()).toBe('fa');
    expect(() => service.set('en')).not.toThrow();
    expect(service.lang()).toBe('en');
    vi.restoreAllMocks();
  });
});
