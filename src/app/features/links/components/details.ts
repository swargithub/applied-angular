import {
  Component,
  ChangeDetectionStrategy,
  input,
  viewChild,
  ElementRef,
  OnInit,
  inject,
  signal,
  effect,
} from '@angular/core';
import { LinksDataService } from '../services/links-data';
import { ApiLink } from '../types';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-link-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h3 class="text-lg font-bold">{{ link()?.title }}</h3>
    <div #detailsModal class="modal">
      <div class="modal-box">
        @if (link()) {
          <h3 class="text-lg font-bold">{{ link()?.title }}</h3>
          <p>{{ link()?.description }}</p>
          <div class="modal-action">
            <form method="dialog">
              <button type="submit" class="btn btn-primary">Close</button>
            </form>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class DetailsComponent {
  id = input.required<string>();
  service = inject(LinksDataService);
  link = signal<ApiLink | undefined>(undefined);
  modal = viewChild<ElementRef<HTMLDialogElement>>('detailsModal');

  constructor() {
    effect(() => {
      const id = this.id();
      if (this.id()) {
        this.service
          .getLink(id)

          .subscribe((r) => this.link.set(r));
      }
    });
    this.modal()?.nativeElement.showModal();
  }
}
