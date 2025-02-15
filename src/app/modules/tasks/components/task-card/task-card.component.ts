import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core'
import { DragDropModule } from '@angular/cdk/drag-drop'

import { Task } from '@core/models/task.model'
import { TaskDetailsModalComponent } from '../task-details-modal/task-details-modal.component'
import { EllipsisIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'task-card',
  imports: [DragDropModule, EllipsisIconComponent],
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
