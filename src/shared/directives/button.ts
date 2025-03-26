import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';
type Intents = 'primary' | 'secondary' | 'success' | 'error';
@Directive({
  selector: 'button[appButton]',
})
export class ButtonDirective implements OnInit {
  element = inject(ElementRef<HTMLButtonElement>);
  intent = input<Intents>('primary');

  round = input(false, {
    transform: (value: string | boolean) =>
      typeof value === 'string' ? value === '' : value,
  });
  ngOnInit() {
    const el = this.element.nativeElement as HTMLButtonElement;
    el.classList.add('btn');
    el.classList.add(`btn-${this.intent()}`);

    if (this.round()) {
      el.classList.add('btn-circle');
    }
  }
}
