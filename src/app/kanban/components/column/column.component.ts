import { ChangeDetectionStrategy, Component } from '@angular/core'
import { TaskCardComponent } from '../task-card/task-card.component'

@Component({
  selector: 'column',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'max-h-full'
  }
})
export class ColumnComponent {}
