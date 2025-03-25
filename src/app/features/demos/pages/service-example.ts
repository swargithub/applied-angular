import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  computed,
} from '@angular/core';
import { NameDisplayComponent } from '../components/name-display';
import { NameEntryComponent } from '../components/name-entry';
import { NameService } from '../services/name';

@Component({
  selector: 'app-service-examples',
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [NameDisplayComponent, NameEntryComponent],
  template: `
    <p>Service examples</p>
    <p>Your name is {{ howLong() }} letters long!</p>
    <div>
      <app-name-display />
    </div>
    <div>
      <app-name-entry />
    </div>
  `,
  styles: ``,
})
export class ServiceExampleComponent {
  service = inject(NameService);

  howLong = computed(() => this.service.name().length);
}
