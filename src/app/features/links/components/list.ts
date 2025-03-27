import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '@app-shared/components';
import { LinksDataService } from '../services/links-data';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent],
  template: `
    @if (listOfLinks()) {
      <div class="flex flex-row flex-wrap gap-2">
        @if (filteringBy()) {
          <button (click)="filteringBy.set(undefined)" class="btn">
            Show All
          </button>
        }
        @for (tag of uniqueTags(); track tag) {
          <button
            [class.btn-success]="filteringBy() === tag"
            [class.btn-ghost]="
              filteringBy() !== tag && filteringBy() !== undefined
            "
            (click)="filteringBy.set(tag)"
            class="btn"
          >
            {{ tag }}
          </button>
        }
      </div>
      <div class="flex flex-row flex-wrap gap-4">
        @for (link of filteredLinks(); track link.id) {
          <app-card [title]="link.title">
            <p class="text-accent">{{ link.description }}</p>
            <div class="flex flex-row gap-4">
              @for (tag of link.tags; track tag) {
                <span class="badge badge-primary">{{ tag }}</span>
              }
            </div>
          </app-card>
        } @empty {
          <p>Sorry, you have no links!</p>
        }
      </div>
    } @else {
      <p>Nothing yet..</p>
    }
  `,
  styles: ``,
})
export class ListComponent {
  //   links = signal<ApiLinks>([]);

  service = inject(LinksDataService);
  filteringBy = signal<string | undefined>(undefined);

  listOfLinks = toSignal(this.service.getLinks());

  // a computed signal that gives me all the unique tags from the listOfLinks
  uniqueTags = computed(() => {
    const links = this.listOfLinks();
    if (!links) return [];
    const tags = [...links]
      .flatMap((link) => link.tags) // take a bunch of links [{... tags?: []}] and give me [... tags]
      .filter(Boolean); // take out anything that doesn't match this predicate ()

    return Array.from(new Set(tags));
  });

  filteredLinks = computed(() => {
    const links = this.listOfLinks();
    const filter = this.filteringBy();
    if (!links || !filter) return links;
    return links.filter((link) => link.tags?.includes(filter));
  });
}
