import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Lang, Localized, Project } from '../../models/resume.models';
import { ChipComponent } from '../../shared/chip/chip.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { RichTextComponent } from '../../shared/rich-text/rich-text.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { stripMarkup } from '../../shared/rich-text/rich-text';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
    ChipComponent,
    IconComponent,
    RichTextComponent,
    SectionTitleComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly title = input.required<Localized>();
  readonly projects = input.required<readonly Project[]>();
  readonly demoLabel = input.required<Localized>();
  readonly sourceLabel = input.required<Localized>();
  readonly lang = input.required<Lang>();

  protected alt(project: Project): string {
    return stripMarkup(project.title[this.lang()]);
  }
}
