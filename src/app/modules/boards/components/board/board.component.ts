import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { BoardsStore } from '@boards/store/boards.store'
import { ColumnComponent } from '@columns/components/column/column.component'
import { ColumnsStore } from '@columns/store/columns.store'
import { EmptyBoardComponent } from '../empty-board/empty-board.component'
import { ColumnAddComponent } from '@columns/components/column-add/column-add.component'
import { LoadingComponent } from '@shared/components/loading/loading.component'

@Component({
  selector: 'board',
  imports: [ColumnComponent, EmptyBoardComponent, ColumnAddComponent, LoadingComponent],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  boardsStore = inject(BoardsStore)
  columnsStore = inject(ColumnsStore)

  activeBoard = computed(() => this.boardsStore.activeBoard())
  loading = computed(() => this.columnsStore.loading())

  columns = computed(() => {
    const activeBoard = this.activeBoard()
    const columns = this.columnsStore.columns()

    const boardColumns = columns.filter(column => column.boardId === activeBoard?.id)
    return boardColumns
  })
}
