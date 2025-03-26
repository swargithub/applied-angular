import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

// Angular will not provide any services to this service through the CONSTRUCTOR unless you have this.
@Injectable({ providedIn: 'root' }) // this does not mean a singleton either.
export class NameService {
  name = signal('Default Name');

  private client = inject(HttpClient);
  // constructor(private client: HttpClient) {
  //   console.log('A Nameservice is Born!');
  // }
  changeName(name: string) {
    this.name.set(name);
  }
}
