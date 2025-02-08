import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { BoardsStore } from '@boards/store/boards.store'
import { EmptyBoardComponent } from '../empty-board/empty-board.component'
import { ColumnComponent } from '@columns/components/column/column.component'
import { ColumnAddComponent } from '@columns/components/column-add/column-add.component'

@Component({
  selector: 'board',
  imports: [EmptyBoardComponent, ColumnComponent, ColumnAddComponent],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  boardsStore = inject(BoardsStore)

  activeBoard = computed(() => this.boardsStore.activeBoard())
}
