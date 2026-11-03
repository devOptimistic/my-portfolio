import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { Project } from '../../models/resume.models';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  const el = (): HTMLElement => fixture.nativeElement;

  const setup = async (projects: readonly Project[]): Promise<void> => {
    await TestBed.configureTestingModule({ imports: [ProjectsComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.componentRef.setInput('title', RESUME.ui.sections.projects);
    fixture.componentRef.setInput('projects', projects);
    fixture.componentRef.setInput('demoLabel', RESUME.ui.liveDemo);
    fixture.componentRef.setInput('sourceLabel', RESUME.ui.source);
    fixture.componentRef.setInput('lang', 'en');
    await fixture.whenStable();
  };

  it('renders a card per project with demo and source links', async () => {
    await setup(RESUME.projects);
    const cards = el().querySelectorAll('.proj');
    expect(cards.length).toBe(RESUME.projects.length);

    const links = cards[0].querySelectorAll<HTMLAnchorElement>('.proj-actions a');
    expect(links.length).toBe(2);
    expect(links[0].classList).toContain('primary');
    expect(links[0].textContent).toContain('Live demo');
    expect(links[1].textContent).toContain('Source');
  });

  it('shows the gradient placeholder when a project has no image', async () => {
    await setup(RESUME.projects);
    expect(el().querySelector('.shot img')).toBeNull();
    expect(el().querySelectorAll('.shot .bar').length).toBe(RESUME.projects.length);
  });

  it('renders a lazy image when one is provided', async () => {
    await setup([{ ...RESUME.projects[0], image: 'images/demo.webp' }]);
    const img = el().querySelector('.shot img');
    expect(img).not.toBeNull();
    expect(img?.getAttribute('loading')).toBe('lazy');
  });

  it('switches text and button labels with the language', async () => {
    await setup(RESUME.projects);
    expect(el().textContent).toContain('One or two lines about the project');

    fixture.componentRef.setInput('lang', 'fa');
    await fixture.whenStable();

    expect(el().textContent).toContain('توضیح کوتاه');
    expect(el().querySelector('.proj-actions a')?.textContent).toContain('دمو');
  });
});
