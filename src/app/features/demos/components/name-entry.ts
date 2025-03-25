import {
  Component,
  ChangeDetectionStrategy,
  output,
  inject,
} from '@angular/core';
import { NameService } from '../services/name';

@Component({
  selector: 'app-name-entry',

  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>
      Note: This is going to be bad, from an A11y perspective just for demos.
      I'll show the "right" way to do it later
    </p>

    <div>
      <input #name type="text" class="input input-bordered" />
      <button class="btn btn-primary" (click)="changeName(name)">
        Change Name
      </button>
    </div>
  `,
  styles: ``,
})
export class NameEntryComponent {
  nameService = inject(NameService);

  changeName(nameel: HTMLInputElement) {
    this.nameService.changeName(nameel.value);
    nameel.value = '';
  }
}
