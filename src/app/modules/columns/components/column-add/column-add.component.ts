import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { ColumnAddEditModalComponent } from '../column-add-edit-modal/column-add-edit-modal.component'
import { plusIconComponent } from '@shared/components/icons/icons.component'
import { BoardsStore } from '@boards/store/boards.store'

@Component({
  selector: 'column-add',
  imports: [plusIconComponent],
  templateUrl: './column-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pt-12'
  }
})
export class ColumnAddComponent {
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
