import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Subtask } from '@core/models/subtask.model'
import { Task } from '@core/models/task.model'
import { TaskStore } from '@tasks/store/task.store'
import { LoadingComponent } from '@shared/components/loading/loading.component'

@Component({
  selector: 'subtask',
  imports: [FormsModule, NgClass, LoadingComponent],
  templateUrl: './subtask.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubtaskComponent {
  subtask = input.required<Subtask>()
  task = input.required<Task>()

  taskStore = inject(TaskStore)
  loading = signal<boolean>(false)

  async updateSubtask(isCompleted: boolean) {
    const taskId = this.task().id

    const { id, title } = this.subtask()
    const subtask = { title, isCompleted }

    this.loading.set(true)
    await this.taskStore.updateSubtask(id, taskId, subtask)
    this.loading.set(false)
  }
}
