import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { AddNewColumnComponent } from '../add-new-column/add-new-column.component'
import { ColumnComponent } from '../column/column.component'
import { BoardService } from '../../services/board.service'
import { EmptyBoardComponent } from '../empty-board/empty-board.component'

@Component({
  selector: 'board',
  standalone: true,
  imports: [AddNewColumnComponent, ColumnComponent, EmptyBoardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  boardService = inject(BoardService)
  activeBoard = computed(() => this.boardService.activeBoard())
}
