import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeComponent } from './components/theme';
import { CardComponent } from '@app-shared/components';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav';

@Component({
  selector: 'app-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeComponent, CardComponent, SectionNavComponent],
  template: `
    <app-section-nav sectionName="Profile" [links]="[]" omitRouterOutlet>
      <div class="flex gap-4 pt-4">
        <app-card title="Set Your Theme">
          <app-profile-theme />
        </app-card>

        <app-card title="Your Information">
          <p>Coming Soon!</p>
        </app-card>
      </div>
    </app-section-nav>
  `,
  styles: ``,
})
export class ProfileComponent {}
