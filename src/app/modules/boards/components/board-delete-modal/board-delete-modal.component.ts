import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { BoardsStore } from '@boards/store/boards.store'

@Component({
  selector: 'board-delete-modal',
  imports: [],
  templateUrl: './board-delete-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg'
  }
})
export class BoardDeleteModalComponent {
  dialogRef = inject(DialogRef<BoardDeleteModalComponent>)
  boardsStore = inject(BoardsStore)

  activeBoard = computed(() => this.boardsStore.activeBoard())

  closeModal() {
    this.dialogRef.close()
  }

  async deleteBoard() {
    const board = this.activeBoard()
    if (!board) return

    await this.boardsStore.deleteBoard(board.id)
    this.dialogRef.close()
  }
}
