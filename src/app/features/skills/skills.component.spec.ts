import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let fixture: ComponentFixture<SkillsComponent>;
  const el = (): HTMLElement => fixture.nativeElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SkillsComponent] }).compileComponents();
    fixture = TestBed.createComponent(SkillsComponent);
    fixture.componentRef.setInput('title', RESUME.ui.sections.skills);
    fixture.componentRef.setInput('groups', RESUME.skillGroups);
    fixture.componentRef.setInput('lang', 'en');
    await fixture.whenStable();
  });

  it('renders one card per skill group and one chip per skill', () => {
    expect(el().querySelectorAll('.skill-card').length).toBe(RESUME.skillGroups.length);
    const total = RESUME.skillGroups.reduce((n, g) => n + g.skills.length, 0);
    expect(el().querySelectorAll('app-chip').length).toBe(total);
  });

  it('highlights only chips marked hot', () => {
    const hotCount = RESUME.skillGroups.flatMap((g) => g.skills).filter((s) => s.hot).length;
    expect(el().querySelectorAll('app-chip.hot').length).toBe(hotCount);
  });

  it('renders the Backend (Learning) group last, in both languages, with LTR non-hot chips', async () => {
    const lastCard = (): Element => [...el().querySelectorAll('.skill-card')].at(-1) as Element;

    expect(lastCard().querySelector('h3')?.textContent).toBe('Backend (Learning)');
    const chips = [...lastCard().querySelectorAll('app-chip')];
    expect(chips.map((c) => c.textContent?.trim())).toEqual([
      'C#',
      'ASP.NET Core Web API',
      'Entity Framework Core',
    ]);
    expect(
      chips.every((c) => c.getAttribute('dir') === 'ltr' && !c.classList.contains('hot')),
    ).toBe(true);

    fixture.componentRef.setInput('lang', 'fa');
    await fixture.whenStable();

    expect(lastCard().querySelector('h3')?.textContent).toBe('بک‌اند (در حال یادگیری)');
    expect(lastCard().querySelector('app-chip')?.getAttribute('dir')).toBe('ltr');
  });

  it('keeps chips LTR and switches group titles with the language', async () => {
    expect(el().querySelector('app-chip')?.getAttribute('dir')).toBe('ltr');
    expect(el().querySelector('h2')?.textContent).toContain('Technical Skills');

    fixture.componentRef.setInput('lang', 'fa');
    await fixture.whenStable();

    expect(el().querySelector('h2')?.textContent).toContain('مهارت‌های فنی');
    expect(el().textContent).toContain('زبان‌ها');
  });
});
