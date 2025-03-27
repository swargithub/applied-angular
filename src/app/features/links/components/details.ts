import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { Location } from '@angular/common';
import { LinksStore } from '../services/links-store';
import { ApiLink } from '../types';

@Component({
  selector: 'app-link-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <dialog #detailsModal class="modal">
      @if (store.selectedLink()) {
        @let link = store.selectedLink()!;
        <div class="modal-box">
          <h3 class="text-lg font-bold">{{ link.title }}</h3>
          <p>{{ link.description }} {{ id() }}</p>
          <div class="modal-action">
            <form method="dialog" (submit)="close()">
              <button type="submit" class="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      }
    </dialog>
  `,
  styles: ``,
})
export class DetailsComponent implements OnInit {
  id = input.required<string>();
  store = inject(LinksStore);
  modal = viewChild<ElementRef<HTMLDialogElement>>('detailsModal');

  ngOnInit() {
    this.modal()?.nativeElement.showModal();
    this.store.setSelectedId(this.id());
  }

  location = inject(Location);
  close() {
    this.store.clearSelectedId();
    this.location.back();
  }
}
