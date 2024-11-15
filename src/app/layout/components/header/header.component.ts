import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { SidebarService } from '../../services/sidebar.service'
import { NgClass } from '@angular/common'
import { ArrowDownIconComponent, LogoIconComponent } from '../../../shared/components/icons.component'

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [NgClass, ArrowDownIconComponent, LogoIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  sidebarService = inject(SidebarService)

  sidebar = this.sidebarService.sidebar
}
