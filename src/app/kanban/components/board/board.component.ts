import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { AddNewColumnComponent } from '../add-new-column/add-new-column.component'
import { ColumnComponent } from '../column/column.component'
import { Board } from '../../interfaces/boards'

@Component({
  selector: 'board',
  standalone: true,
  imports: [AddNewColumnComponent, ColumnComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  board = input.required<Board>()
}
