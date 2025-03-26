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
import { CardComponent } from '@app-shared/components';

@Component({
  selector: 'app-service-examples',
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [NameDisplayComponent, NameEntryComponent, CardComponent],
  template: `
    <p>Service examples</p>
    <p>Your name is {{ howLong() }} letters long!</p>
    <div class="flex gap-4">
      <app-card title="Display Your Name">
        <app-name-display />
      </app-card>
      <app-card title="Enter Your Name">
        <app-name-entry />
      </app-card>
    </div>
  `,
  styles: ``,
})
export class ServiceExampleComponent {
  service = inject(NameService);

  howLong = computed(() => this.service.name().length);
}
