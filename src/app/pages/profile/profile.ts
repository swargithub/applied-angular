import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeComponent } from './components/theme';
import { CardComponent } from '@app-shared/components';

@Component({
  selector: 'app-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeComponent, CardComponent],
  template: `
    <h2 class="text-2xl font-bold">Your Profile</h2>
    <div class="flex gap-4 pt-4">
      <app-card title="Set Your Theme">
        <app-profile-theme />
      </app-card>

      <app-card title="Your Information">
        <p>Coming Soon!</p>
      </app-card>
    </div>
  `,
  styles: ``,
})
export class ProfileComponent {}
