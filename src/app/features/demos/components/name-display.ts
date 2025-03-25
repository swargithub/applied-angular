import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NameService } from '../services/name';

@Component({
  selector: 'app-name-display',

  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Your Name is {{ nameService.name() }}</p> `,
  styles: ``,
})
export class NameDisplayComponent {
  // old skool
  constructor(public nameService: NameService) {}
}
