import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { BoardIconComponent, plusIconComponent, SunIconComponent, MoonIconComponent, HideIconComponent } from '../../../shared/components/icons.component'
import { SidebarService } from '../../services/sidebar.service'
import { DarkModeService } from '../../../shared/services/dark-mode.service'
import { Dialog, DialogModule } from '@angular/cdk/dialog'
import { AddEditBoardModalComponent } from '../../../kanban/components/add-edit-board-modal/add-edit-board-modal.component'

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [DialogModule, BoardIconComponent, plusIconComponent, SunIconComponent, MoonIconComponent, HideIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  dialog = inject(Dialog)

  sidebarService = inject(SidebarService)
  darkModeService = inject(DarkModeService)

  sidebar = this.sidebarService.sidebar
  darkMode = this.darkModeService.darkMode

  openAddEditModal() {
    this.dialog.open(AddEditBoardModalComponent)
  }
}
