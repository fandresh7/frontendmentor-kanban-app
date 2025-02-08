import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { BoardsStore } from '@boards/store/boards.store'
import { EmptyBoardComponent } from '../empty-board/empty-board.component'
import { ColumnComponent } from '@columns/components/column/column.component'
import { ColumnAddComponent } from '@columns/components/column-add/column-add.component'
import { ColumnsStore } from '@columns/store/columns.store'
import { LoadingComponent } from '@shared/components/loading/loading.component'

@Component({
  selector: 'board',
  imports: [EmptyBoardComponent, ColumnComponent, ColumnAddComponent, LoadingComponent],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  boardsStore = inject(BoardsStore)
  columnsStore = inject(ColumnsStore)

  activeBoard = computed(() => this.boardsStore.activeBoard())
  columns = computed(() => this.columnsStore.columns())
  loading = computed(() => this.columnsStore.loading())

  isLoadingColumns = computed(() => this.activeBoard() && this.loading())
  hasColumns = computed(() => this.columns().length > 0)
}
