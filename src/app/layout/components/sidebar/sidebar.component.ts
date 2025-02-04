import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'

import { BoardListComponent } from '@boards/components/board-list/board-list.component'
import { BoardsStore } from '@boards/store/boards.store'

import { HideIconComponent, MoonIconComponent, SunIconComponent } from '@shared/components/icons/icons.component'
import { DarkModeService } from '@shared/services/dark-mode.service'
import { SidebarService } from '@shared/services/sidebar.service'

@Component({
  selector: 'sidebar',
  imports: [BoardListComponent, SunIconComponent, MoonIconComponent, HideIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  sidebarService = inject(SidebarService)
  darkModeService = inject(DarkModeService)

  boardsStore = inject(BoardsStore)

  sidebar = computed(() => this.sidebarService.sidebar())
  darkMode = computed(() => this.darkModeService.darkMode())

  boards = computed(() => this.boardsStore.boards())
}
