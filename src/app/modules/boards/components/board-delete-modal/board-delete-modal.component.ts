import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { BoardsStore } from '@boards/store/boards.store'
import { ColumnsStore } from '@columns/store/columns.store'

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
  columnsStore = inject(ColumnsStore)

  activeBoard = computed(() => this.boardsStore.activeBoard())

  loading = signal<boolean>(false)

  closeModal() {
    this.dialogRef.close()
  }

  async deleteBoard() {
    const board = this.activeBoard()
    if (!board) return

    this.loading.set(true)

    await this.boardsStore.deleteBoard(board.id)
    this.columnsStore.resetStore()

    this.loading.set(false)
    this.dialogRef.close()
  }
}
