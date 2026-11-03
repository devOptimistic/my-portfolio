import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Lang, Localized } from '../../models/resume.models';
import { RichTextComponent } from '../../shared/rich-text/rich-text.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RichTextComponent, SectionTitleComponent],
  template: `
    <section class="card" aria-labelledby="education-title">
      <app-section-title id="education-title" [text]="title()[lang()]" />
      <ul>
        @for (item of items(); track $index) {
          <li><app-rich-text [value]="item[lang()]" /></li>
        }
      </ul>
    </section>
  `,
  styles: `
    ul {
      margin: 8px 0 0;
      padding-inline-start: 22px;
    }

    li {
      margin: 6px 0;
    }
  `,
})
export class EducationComponent {
  readonly title = input.required<Localized>();
  readonly items = input.required<readonly Localized[]>();
  readonly lang = input.required<Lang>();
}
