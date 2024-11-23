import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { EmptyBoardComponent } from '../../components/empty-board/empty-board.component'
import { BoardComponent } from '../../components/board/board.component'
import { BoardService } from '../../services/board.service'

@Component({
  selector: 'home',
  standalone: true,
  imports: [EmptyBoardComponent, BoardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  boardService = inject(BoardService)
  activeBoard = computed(() => {
    console.log(this.boardService.activeBoard())
    return this.boardService.activeBoard()
  })
}
