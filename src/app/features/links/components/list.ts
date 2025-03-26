import {
  Component,
  ChangeDetectionStrategy,
  signal,
  resource,
} from '@angular/core';
import { ApiLinks } from '../types';
import { CardComponent } from '@app-shared/components';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent],
  template: `
    @if (links.isLoading()) {
      <p>
        Hold on, getting your links! (insert cute animated loading gif here)
      </p>
    } @else {
      @for (link of links.value(); track link.id) {
        <app-card [title]="link.title">
          <p>Description: {{ link.description }}</p>
        </app-card>
      } @empty {
        <p>Sorry, you have no links!</p>
      }
    }
  `,
  styles: ``,
})
export class ListComponent {
  //   links = signal<ApiLinks>([]);

  links = resource({
    loader: () =>
      fetch('https://some-service.com/api/links').then((r) => {
        return r.json() as unknown as ApiLinks;
      }),
  });
}
