import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CardComponent } from '@app-shared/components';
import { map, tap } from 'rxjs';
import { LinksDataService } from '../services/links-data';
import { LinksStore } from '../services/links-store';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    @if (listOfLinks()) {
      <router-outlet />
      <div class="flex flex-row flex-wrap gap-2">
        @if (filteringBy()) {
          <a [routerLink]="[]" [queryParams]="{}" class="btn"> Show All </a>
        }
        @for (tag of uniqueTags(); track tag) {
          <a
            [routerLink]="[]"
            [queryParams]="{ tag }"
            [routerLinkActive]="['btn-primary']"
            [class.btn-ghost]="
              filteringBy() !== tag && filteringBy() !== undefined
            "
            class="btn"
          >
            {{ tag }}
          </a>
        }
      </div>
      <div class="flex flex-row flex-wrap gap-4">
        @for (link of filteredLinks(); track link.id) {
          <app-card [title]="link.title">
            <p class="text-accent">{{ link.description }}</p>
            <div class="flex flex-row gap-4">
              @for (tag of link.tags; track tag) {
                <a
                  [routerLink]="[]"
                  [queryParams]="{ tag }"
                  class="badge badge-primary"
                  >{{ tag }}</a
                >
              }
            </div>
            <div class="flex flex-row gap-4">
              <a
                target="_blank"
                [href]="link.url"
                class="btn btn-primary"
                [title]="link.url"
                >Visit Link</a
              >
              <a [routerLink]="[link.id]" class="btn btn-primary"
                >See Details</a
              >
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
  #activatedRoute = inject(ActivatedRoute);
  store = inject(LinksStore);
  constructor() {
    this.#activatedRoute.queryParamMap
      .pipe(
        map((params) => params.get('tag')),
        tap((tag) => this.filteringBy.set(tag)),
        takeUntilDestroyed(), // this is super cool. can eliminate a lot of janky code.
      )
      .subscribe();
  }
  service = inject(LinksDataService);
  filteringBy = signal<string | undefined | null>(undefined);

  listOfLinks = this.store.entities;

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
