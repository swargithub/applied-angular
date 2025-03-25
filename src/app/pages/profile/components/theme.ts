import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PrefsStore } from '../../../services/prefs.store';

@Component({
  selector: 'app-profile-theme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleCasePipe],
  providers: [],
  template: `
    <div class="join">
      @for (theme of store.availableThemes; track theme) {
        <button
          [disabled]="store.theme() === theme"
          class="join-item"
          class="btn btn-primary"
          (click)="store.setTheme(theme)"
        >
          {{ theme | titlecase }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class ThemeComponent {
  store = inject(PrefsStore);
}
