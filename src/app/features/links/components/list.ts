import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '@app-shared/components';
import { LinksDataService } from '../services/links-data';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent],
  template: `
    @if (listOfLinks()) {
      @for (link of listOfLinks(); track link.id) {
        <app-card [title]="link.title">
          <p>Description: {{ link.description }}</p>
        </app-card>
      } @empty {
        <p>Sorry, you have no links!</p>
      }
    } @else {
      <p>Nothing yet..</p>
    }
  `,
  styles: ``,
})
export class ListComponent {
  //   links = signal<ApiLinks>([]);

  service = inject(LinksDataService);

  listOfLinks = toSignal(this.service.getLinks());

  //   links = resource({
  //     loader: () =>
  //       fetch('https://some-service.com/api/links').then((r) => {
  //         return r.json() as unknown as ApiLinks;
  //       }),
  //   });

  constructor() {
    // bad code - will fix
    // this.listOfLinks$.subscribe((l) => console.log(l));
  }
}
