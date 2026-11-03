export type RichKind = 'text' | 'bold' | 'todo';

export interface RichSegment {
  kind: RichKind;
  text: string;
}

const TOKEN = /(\*\*[^*]+\*\*|\[\[TODO:[^\]]*\]\])/g;

/** Splits `**bold**` and `[[TODO: placeholder]]` markup into renderable segments. */
export function parseRich(value: string): RichSegment[] {
  return value
    .split(TOKEN)
    .filter((part) => part.length > 0)
    .map((part): RichSegment => {
      if (part.startsWith('**')) {
        return { kind: 'bold', text: part.slice(2, -2) };
      }
      if (part.startsWith('[[TODO:')) {
        return { kind: 'todo', text: part.slice(7, -2).trim() };
      }
      return { kind: 'text', text: part };
    });
}

export function stripMarkup(value: string): string {
  return parseRich(value)
    .map((s) => s.text)
    .join('');
}
