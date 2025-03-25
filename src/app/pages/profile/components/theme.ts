import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PrefsStore } from '../../../services/prefs.store';

@Component({
  selector: 'app-profile-theme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [PrefsStore],
  template: `
    <div class="join">
      <button
        [disabled]="store.theme() === 'synthwave'"
        class="join-item"
        class="btn btn-primary"
        (click)="store.setTheme('synthwave')"
      >
        Synthwave
      </button>
      <button
        [disabled]="store.theme() === 'cyberpunk'"
        class="join-item"
        class="btn btn-primary"
        (click)="store.setTheme('cyberpunk')"
      >
        Cyberpunk
      </button>
      <button
        [disabled]="store.theme() === 'aqua'"
        class="join-item"
        class="btn btn-primary"
        (click)="store.setTheme('aqua')"
      >
        Aqua
      </button>
    </div>
  `,
  styles: ``,
})
export class ThemeComponent {
  store = inject(PrefsStore);
}
