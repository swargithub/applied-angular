import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeComponent } from './components/theme';
import { CardComponent } from './components/card';

@Component({
  selector: 'app-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeComponent, CardComponent],
  template: `
    <h2 class="text-2xl font-bold">Your Profile</h2>
    <div class="flex gap-4 pt-4">
      <app-profile-card title="Set Your Theme">
        <app-profile-theme />
      </app-profile-card>

      <app-profile-card title="Your Information">
        <p>Coming Soon!</p>
      </app-profile-card>
    </div>
  `,
  styles: ``,
})
export class ProfileComponent {}
