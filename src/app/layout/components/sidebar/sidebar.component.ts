import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'

import { BoardListComponent } from '@boards/components/board-list/board-list.component'
import { BoardsStore } from '@boards/store/boards.store'
import { DarkModeComponent } from '@shared/components/dark-mode/dark-mode.component'

import { HideIconComponent } from '@shared/components/icons/icons.component'
import { SidebarService } from '@shared/services/sidebar.service'

@Component({
  selector: 'sidebar',
  imports: [BoardListComponent, HideIconComponent, DarkModeComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  sidebarService = inject(SidebarService)
  sidebar = computed(() => this.sidebarService.sidebar())

  boardsStore = inject(BoardsStore)
  boards = computed(() => this.boardsStore.boards())
}
