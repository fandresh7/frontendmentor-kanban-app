import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { HeaderComponent } from './components/header/header.component'
import { SidebarService } from './services/sidebar.service'
import { NgClass } from '@angular/common'

@Component({
  selector: 'layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  sidebarService = inject(SidebarService)
  sidebar = this.sidebarService.sidebar
}
