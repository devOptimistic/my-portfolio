import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Lang, Localized, SkillGroup } from '../../models/resume.models';
import { ChipComponent } from '../../shared/chip/chip.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChipComponent, SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly title = input.required<Localized>();
  readonly groups = input.required<readonly SkillGroup[]>();
  readonly lang = input.required<Lang>();
}
