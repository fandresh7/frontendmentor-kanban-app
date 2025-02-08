import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { BoardsStore } from '@boards/store/boards.store'

import { ColumnAddEditModalComponent } from '@columns/components/column-add-edit-modal/column-add-edit-modal.component'
import { plusIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'empty-board',
  imports: [plusIconComponent],
  templateUrl: './empty-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyBoardComponent {
  dialog = inject(Dialog)
  boardStore = inject(BoardsStore)

  activeBoard = computed(() => this.boardStore.activeBoard())

  openModal() {
    const board = this.activeBoard()
    if (!board) return

    this.dialog.open(ColumnAddEditModalComponent, {
      data: {
        boardId: board.id,
        type: 'new'
      }
    })
  }
}
