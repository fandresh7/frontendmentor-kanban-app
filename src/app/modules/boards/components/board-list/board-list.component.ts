import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core'
import { NgClass } from '@angular/common'

import { Board } from '@core/models/board.model'
import { BoardsStore } from '@boards/store/boards.store'
import { BoardAddEditModalComponent } from '../board-add-edit-modal/board-add-edit-modal.component'

import { SidebarService } from '@shared/services/sidebar.service'
import { BoardIconComponent, plusIconComponent } from '@shared/components/icons/icons.component'
import { ColumnsStore } from '@columns/store/columns.store'
import { LoadingComponent } from '@shared/components/loading/loading.component'

@Component({
  selector: 'board-list',
  imports: [NgClass, BoardIconComponent, plusIconComponent, LoadingComponent],
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative flex flex-col px-6 overflow-y-auto'
  }
})
export class BoardListComponent {
  dialog = inject(Dialog)

  sidebarService = inject(SidebarService)
  boardsStore = inject(BoardsStore)
  columnsStore = inject(ColumnsStore)

  boardSelected = output<void>()

  boards = computed(() => this.boardsStore.boards())
  activeBoard = computed(() => this.boardsStore.activeBoard())
  loading = computed(() => this.boardsStore.loading())

  constructor() {
    this.boardsStore.loadBoards()
  }

  openAddEditModal() {
    this.sidebarService.closeSidebar()
    this.dialog.open(BoardAddEditModalComponent, {
      data: {
        type: 'new'
      }
    })
  }

  async changeActiveBoard(board: Board) {
    this.boardsStore.changeActiveBoard(board)
    await this.columnsStore.loadColumns(board.id)

    this.boardSelected.emit()
  }
}
