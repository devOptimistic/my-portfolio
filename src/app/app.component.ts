import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from './core/language.service';
import { SeoService } from './core/seo.service';
import { ThemeService } from './core/theme.service';
import { RESUME } from './data/resume.data';
import { EducationComponent } from './features/education/education.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { HeroComponent } from './features/hero/hero.component';
import { SkillsComponent } from './features/skills/skills.component';
import { SummaryComponent } from './features/summary/summary.component';
import { IconComponent } from './shared/icon/icon.component';
import { ProjectsComponent } from './features/projects/projects.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    EducationComponent,
    ExperienceComponent,
    HeroComponent,
    IconComponent,
    SkillsComponent,
    SummaryComponent,
    ProjectsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  private readonly language = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  protected readonly resume = RESUME;
  protected readonly lang = this.language.lang;
  protected readonly theme = this.themeService.theme;
  protected readonly ui = this.resume.ui;
  protected readonly nextLang = computed(() => (this.lang() === 'fa' ? 'en' : 'fa'));

  constructor() {
    inject(SeoService);
  }

  protected toggleLanguage(): void {
    this.language.toggle();
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }
}
