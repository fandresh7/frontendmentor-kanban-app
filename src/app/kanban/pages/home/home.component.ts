import { ChangeDetectionStrategy, Component } from '@angular/core'
import { EmptyBoardComponent } from '../../components/empty-board/empty-board.component'
import { BoardComponent } from '../../components/board/board.component'

@Component({
  selector: 'home',
  standalone: true,
  imports: [EmptyBoardComponent, BoardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
