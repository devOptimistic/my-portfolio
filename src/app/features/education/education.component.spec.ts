import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let fixture: ComponentFixture<EducationComponent>;
  const el = (): HTMLElement => fixture.nativeElement;
  const items = (): HTMLElement[] => [...el().querySelectorAll<HTMLElement>('li')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [EducationComponent] }).compileComponents();
    fixture = TestBed.createComponent(EducationComponent);
    fixture.componentRef.setInput('title', RESUME.ui.sections.education);
    fixture.componentRef.setInput('items', RESUME.education);
    fixture.componentRef.setInput('lang', 'en');
    await fixture.whenStable();
  });

  it('renders every entry and keeps the section title', () => {
    expect(items().length).toBe(RESUME.education.length);
    expect(el().querySelector('h2')?.textContent).toContain('Education & Languages');
  });

  it('renders the military service entry last, in English', () => {
    const last = items().at(-1);
    expect(last?.textContent).toBe('Military service: Student deferment (until month/year)');
    expect(last?.querySelector('.todo')?.textContent).toBe('month/year');
  });

  it('renders the military service entry last, in Persian', async () => {
    fixture.componentRef.setInput('lang', 'fa');
    await fixture.whenStable();

    const last = items().at(-1);
    expect(last?.textContent).toBe(
      'وضعیت نظام وظیفه: دارای معافیت تحصیلی (تا ماه/سال پایان معافیت)',
    );
    expect(last?.querySelector('.todo')?.textContent).toBe('ماه/سال پایان معافیت');
  });
});
