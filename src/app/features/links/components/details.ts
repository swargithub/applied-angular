import {
  Component,
  ChangeDetectionStrategy,
  input,
  viewChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-link-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <dialog #detailsModal class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">TITLE GOES HERE</h3>
        <p>DESCRIPTION GOES HERE</p>
        <div class="modal-action">
          <form method="dialog">
            <button type="submit" class="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  `,
  styles: ``,
})
export class DetailsComponent implements OnInit {
  id = input.required<string>();

  modal = viewChild<ElementRef<HTMLDialogElement>>('detailsModal');

  ngOnInit() {
    this.modal()?.nativeElement.showModal();
  }
}
