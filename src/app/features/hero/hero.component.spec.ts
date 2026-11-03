import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { Profile } from '../../models/resume.models';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;
  const el = (): HTMLElement => fixture.nativeElement;

  const setup = async (profile: Profile, lang: 'fa' | 'en' = 'en'): Promise<void> => {
    await TestBed.configureTestingModule({ imports: [HeroComponent] }).compileComponents();
    fixture = TestBed.createComponent(HeroComponent);
    fixture.componentRef.setInput('profile', profile);
    fixture.componentRef.setInput('lang', lang);
    await fixture.whenStable();
  };

  it('renders the photo with size attributes and a plain-text alt', async () => {
    await setup(RESUME.profile);
    const img = el().querySelector<HTMLImageElement>('img.photo');

    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toContain('images/profile.webp');
    expect(img?.getAttribute('width')).toBe('400');
    expect(img?.getAttribute('height')).toBe('400');
    expect(img?.getAttribute('alt')).toBe('Profile photo of your name');
    expect(img?.getAttribute('fetchpriority')).toBe('high');
  });

  it('localizes the alt text', async () => {
    await setup(RESUME.profile, 'fa');
    expect(el().querySelector('img.photo')?.getAttribute('alt')).toBe('عکس پروفایل نام شما');
  });

  it('renders no image when photo is missing', async () => {
    const withoutPhoto: Profile = { ...RESUME.profile, photo: undefined };
    await setup(withoutPhoto);

    expect(el().querySelector('img')).toBeNull();
    expect(el().querySelector('h1')).not.toBeNull();
    expect(el().querySelectorAll('.links li').length).toBe(RESUME.profile.contacts.length);
  });
});
