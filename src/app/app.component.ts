import { Component, inject } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';
import { PrefsStore } from './services/prefs.store';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar />
    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [NavBarComponent, RouterOutlet],
})
export class AppComponent {
  store = inject(PrefsStore); // only doing this so that it will create it, and run the onInit
}
