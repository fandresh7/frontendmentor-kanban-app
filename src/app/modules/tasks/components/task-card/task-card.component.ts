import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core'
import { Task } from '@tasks/interfaces/tasks.interface'
import { TaskDetailsModalComponent } from '../task-details-modal/task-details-modal.component'

@Component({
  selector: 'task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {
  task = input.required<Task>()

  dialog = inject(Dialog)

  openTaskModal() {
    this.dialog.open(TaskDetailsModalComponent, {
      autoFocus: undefined,
      data: this.task()
    })
  }
}
