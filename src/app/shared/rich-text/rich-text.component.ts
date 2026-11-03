import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { parseRich } from './rich-text';

@Component({
  selector: 'app-rich-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // prettier-ignore
  // Whitespace-sensitive: any added newline/indent would render as a visible space around the text.
  template: `@for (seg of segments(); track $index) {@switch (seg.kind) {@case ('bold') {<b>{{ seg.text }}</b>}@case ('todo') {<span class="todo">{{ seg.text }}</span>}@default {{{ seg.text }}}}}`,
  styles: `
    .todo {
      background: var(--todo-bg);
      color: var(--todo-fg);
      padding: 0 6px;
      border-radius: 6px;
    }

    @media print {
      .todo {
        background: none;
        color: inherit;
        padding: 0;
      }
    }
  `,
})
export class RichTextComponent {
  readonly value = input.required<string>();
  protected readonly segments = computed(() => parseRich(this.value()));
}
