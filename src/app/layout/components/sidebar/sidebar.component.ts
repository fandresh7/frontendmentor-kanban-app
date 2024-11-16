import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { BoardIconComponent, plusIconComponent, SunIconComponent, MoonIconComponent, HideIconComponent } from '../../../shared/components/icons.component'
import { SidebarService } from '../../services/sidebar.service'
import { DarkModeService } from '../../../shared/services/dark-mode.service'

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [BoardIconComponent, plusIconComponent, SunIconComponent, MoonIconComponent, HideIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  sidebarService = inject(SidebarService)
  darkModeService = inject(DarkModeService)

  sidebar = this.sidebarService.sidebar
  darkMode = this.darkModeService.darkMode
}
