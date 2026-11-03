import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h2 [id]="id()">{{ text() }}</h2>`,
  styles: `
    h2 {
      margin: 0 0 14px;
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    h2::before {
      content: '';
      flex: none;
      width: 6px;
      height: 22px;
      border-radius: 3px;
      background: var(--grad);
    }

    @media print {
      h2::before {
        background: var(--accent);
      }
    }
  `,
})
export class SectionTitleComponent {
  readonly id = input.required<string>();
  readonly text = input.required<string>();
}
