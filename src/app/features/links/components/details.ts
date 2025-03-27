import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  OnInit,
  viewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LinksStore } from '../services/links-store';
@Component({
  selector: 'app-link-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <dialog #detailsModal class="modal">
      @if (store.selectedLink()) {
        @let link = store.selectedLink()!;
        <div class="modal-box">
          <h3 class="text-lg font-bold">{{ link.title }}</h3>
          <p>{{ link.description }} {{ id() }}</p>

          <form [formGroup]="form" (ngSubmit)="addToReadingList()" class="pt-4">
            <label class="floating-label">
              <span>Note</span>
              <textarea
                formControlName="note"
                placeholder="Note for reading list"
                class="input input-md"
                rows="8"
              ></textarea>
            </label>
            <button type="submit" class="btn btn-primary">
              Add To Reading List
            </button>
          </form>
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
  form = new FormGroup({
    note: new FormControl<string>('', { nonNullable: true }),
  });
  ngOnInit() {
    this.modal()?.nativeElement.showModal();
    this.store.setSelectedId(this.id());
  }

  location = inject(Location);
  close() {
    this.store.clearSelectedId();
    this.location.back();
  }

  addToReadingList() {
    this.store.addItemToReadingList(this.id(), this.form.controls.note.value);
    this.close();
  }
}
