import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NameService } from '../features/demos/services/name';
import { PrefsStore } from '../services/prefs.store';
import { TitleCasePipe } from '@angular/common';
import { SectionNavComponent } from '@app-shared/components/';

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleCasePipe, SectionNavComponent],
  template: `
    <app-section-nav [links]="[]" sectionName="Dashboard" />
    <p>Welcome, {{ nameService.name() }}!</p>
    <p>You are currently using {{ prefsStore.theme() | titlecase }} Theme</p>
  `,
  styles: ``,
})
export class DashboardComponent {
  nameService = inject(NameService);

  prefsStore = inject(PrefsStore);
}
