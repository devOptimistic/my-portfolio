import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Lang, Localized } from '../../models/resume.models';
import { RichTextComponent } from '../../shared/rich-text/rich-text.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RichTextComponent, SectionTitleComponent],
  template: `
    <section class="card" aria-labelledby="summary-title">
      <app-section-title id="summary-title" [text]="title()[lang()]" />
      <p><app-rich-text [value]="summary()[lang()]" /></p>
    </section>
  `,
})
export class SummaryComponent {
  readonly title = input.required<Localized>();
  readonly summary = input.required<Localized>();
  readonly lang = input.required<Lang>();
}
