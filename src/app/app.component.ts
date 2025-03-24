import { Component } from '@angular/core';
import { DemoComponent } from './components/demo1/demo1';

@Component({
  selector: 'app-root',
  template: `
    <main class="container mx-auto">
      <app-demo-1 /><app-demo-1 /><app-demo-1 /><app-demo-1 /><app-demo-1 /><app-demo-1 /><app-demo-1 /><app-demo-1 /><app-demo-1 /><app-demo-1 />
    </main>
  `,
  styles: [],
  imports: [DemoComponent],
})
export class AppComponent {}
