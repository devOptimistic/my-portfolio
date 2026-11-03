import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Technology/skill chip. Always LTR, even inside RTL pages. */
@Component({
  selector: 'app-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.hot]': 'hot()', lang: 'en', dir: 'ltr' },
  template: `{{ label() }}`,
  styleUrl: './chip.component.scss',
})
export class ChipComponent {
  readonly label = input.required<string>();
  readonly hot = input(false);
}
