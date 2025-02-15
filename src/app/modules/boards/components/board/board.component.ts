import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { BoardsStore } from '@boards/store/boards.store'
import { ColumnComponent } from '@columns/components/column/column.component'
import { ColumnsStore } from '@columns/store/columns.store'
import { EmptyBoardComponent } from '../empty-board/empty-board.component'
import { ColumnAddComponent } from '@columns/components/column-add/column-add.component'
import { LoadingComponent } from '@shared/components/loading/loading.component'
import { DragDropModule } from '@angular/cdk/drag-drop'

@Component({
  selector: 'board',
  imports: [DragDropModule, ColumnComponent, EmptyBoardComponent, ColumnAddComponent, LoadingComponent],
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

  colors = ['bg-[#49C4E5]', 'bg-[#8471F2]', 'bg-[#67E2AE]', 'bg-[#F7D154]', 'bg-[#E28CCA]', 'bg-[#FD8973]']

  getColor(index: number) {
    return this.colors[index % this.colors.length]
  }
}
