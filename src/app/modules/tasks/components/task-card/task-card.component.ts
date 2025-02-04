import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { Task } from '@tasks/interfaces/tasks.interface'

@Component({
  selector: 'task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {
  task = input.required<Task>()
}
