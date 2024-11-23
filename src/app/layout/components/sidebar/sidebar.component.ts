import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { SunIconComponent, MoonIconComponent, HideIconComponent } from '../../../shared/components/icons.component'
import { SidebarService } from '../../services/sidebar.service'
import { DarkModeService } from '../../../shared/services/dark-mode.service'
import { BoardService } from '../../../kanban/services/board.service'
import { BoardListComponent } from '../../../kanban/components/board-list/board-list.component'

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [SunIconComponent, MoonIconComponent, HideIconComponent, BoardListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  sidebarService = inject(SidebarService)
  darkModeService = inject(DarkModeService)

  boardService = inject(BoardService)

  sidebar = computed(() => this.sidebarService.sidebar)
  darkMode = computed(() => this.darkModeService.darkMode)

  boards = computed(() => this.boardService.boards())
}
