import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav';
import { CounterStore } from './services/counter-store';

@Component({
  selector: 'app-counter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNavComponent],
  providers: [CounterStore],
  template: `
    <app-section-nav sectionName="Counter Lab" [links]="links()">
      <p>
        This is a sample for the lab in class. It's about state, lifting state,
        signals, stuff like that.
      </p>
    </app-section-nav>
  `,
  styles: ``,
})
export class CounterComponent {
  links = signal([
    {
      href: 'ui',
      label: 'Counter',
    },
    {
      href: 'prefs',
      label: 'Preferences',
    },
  ]);
}
