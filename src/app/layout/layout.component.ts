import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SidebarService } from '@shared/services/sidebar.service'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { HeaderComponent } from './components/header/header.component'
import { NgClass } from '@angular/common'
import { ShowIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'layout',
  imports: [RouterOutlet, NgClass, SidebarComponent, HeaderComponent, ShowIconComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  sidebarService = inject(SidebarService)
  sidebar = this.sidebarService.sidebar
}
