import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Lang, Profile } from '../../models/resume.models';
import { IconComponent } from '../../shared/icon/icon.component';
import { stripMarkup } from '../../shared/rich-text/rich-text';
import { RichTextComponent } from '../../shared/rich-text/rich-text.component';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, NgOptimizedImage, RichTextComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly profile = input.required<Profile>();
  readonly lang = input.required<Lang>();

  protected readonly photoAlt = computed(() => {
    const photo = this.profile().photo;
    return photo ? stripMarkup(photo.alt[this.lang()]) : '';
  });
}
