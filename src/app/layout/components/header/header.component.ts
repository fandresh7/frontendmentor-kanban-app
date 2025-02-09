import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'

import { BoardsStore } from '@boards/store/boards.store'
import { ActionsComponent } from '../actions/actions.component'

import { SidebarService } from '@shared/services/sidebar.service'
import { ArrowDownIconComponent, LogoIconComponent } from '@shared/components/icons/icons.component'
import { ColumnsStore } from '@columns/store/columns.store'

@Component({
  selector: 'main-header',
  imports: [NgClass, ActionsComponent, LogoIconComponent, ArrowDownIconComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  sidebarService = inject(SidebarService)
  boardsStore = inject(BoardsStore)
  columnsStore = inject(ColumnsStore)

  sidebar = this.sidebarService.sidebar
  activeBoard = computed(() => this.boardsStore.activeBoard())

  hasLoadedColumns = computed(() => {
    const activeBoard = this.activeBoard()
    const loadedBoardsIds = this.columnsStore.loadedBoardIds()

    return loadedBoardsIds.has(activeBoard!.id)
  })
}
