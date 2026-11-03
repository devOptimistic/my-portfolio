import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Job, Lang, Localized } from '../../models/resume.models';
import { RichTextComponent } from '../../shared/rich-text/rich-text.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RichTextComponent, SectionTitleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly title = input.required<Localized>();
  readonly jobs = input.required<readonly Job[]>();
  readonly lang = input.required<Lang>();
}
