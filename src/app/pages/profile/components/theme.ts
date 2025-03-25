import {
  Component,
  ChangeDetectionStrategy,
  signal,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-profile-theme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join">
      <button
        [disabled]="selectedTheme() === 'synthwave'"
        class="join-item"
        class="btn btn-primary"
        (click)="selectedTheme.set('synthwave')"
      >
        Synthwave
      </button>
      <button
        [disabled]="selectedTheme() === 'cyberpunk'"
        class="join-item"
        class="btn btn-primary"
        (click)="selectedTheme.set('cyberpunk')"
      >
        Cyberpunk
      </button>
      <button
        [disabled]="selectedTheme() === 'aqua'"
        class="join-item"
        class="btn btn-primary"
        (click)="selectedTheme.set('aqua')"
      >
        Aqua
      </button>
    </div>
  `,
  styles: ``,
})
export class ThemeComponent {
  selectedTheme = signal<'synthwave' | 'cyberpunk' | 'aqua'>('synthwave');

  constructor() {
    const savedValue = localStorage.getItem('theme') as
      | 'synthwave'
      | 'cyberpunk'
      | 'aqua'
      | null;
    if (savedValue) {
      this.selectedTheme.set(savedValue);
    }

    effect(() => {
      const theme = this.selectedTheme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }
}
