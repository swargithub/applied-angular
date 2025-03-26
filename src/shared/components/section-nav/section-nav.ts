import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
export type NavBarItem = {
  href: string;
  label: string;
};

@Component({
  selector: 'app-section-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="navbar bg-base-300 shadow-sm my-8">
      <a routerLink="." class="btn btn-ghost text-xl">{{ sectionName() }}</a>
      <ul class="menu menu-horizontal px-1">
        @for (link of links(); track $index) {
          <li>
            <a
              [routerLink]="[link.href]"
              routerLinkActive="underline"
              class="btn btn-ghost"
              >{{ link.label }}
            </a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class SectionNavComponent {
  links = input.required<NavBarItem[]>();
  sectionName = input.required<string>();
}
