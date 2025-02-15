import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core'

import { Task } from '@core/models/task.model'
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

  subtasks = computed(() => {
    const subtasks = this.task().subtasks
    return subtasks
  })

  completedSubtasks = computed(() => {
    const subtasks = this.task().subtasks
    return subtasks.filter(subtask => subtask.isCompleted)
  })

  openTaskModal() {
    this.dialog.open(TaskDetailsModalComponent, {
      autoFocus: undefined,
      data: this.task()
    })
  }
}
