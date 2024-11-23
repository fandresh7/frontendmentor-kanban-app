import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { TaskCardComponent } from '../task-card/task-card.component'
import { Column } from '../../interfaces/boards'
import { UpperCasePipe } from '@angular/common'

@Component({
  selector: 'column',
  standalone: true,
  imports: [TaskCardComponent, UpperCasePipe],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'max-h-full'
  }
})
export class ColumnComponent {
  column = input.required<Column>()
}
