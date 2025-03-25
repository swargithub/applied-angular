import { signal } from '@angular/core';

export class NameService {
  name = signal('Default Name');

  constructor() {
    console.log('A Nameservice is Born!');
  }
  changeName(name: string) {
    this.name.set(name);
  }
}
