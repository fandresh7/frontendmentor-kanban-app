import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Column } from '@core/models/column.model'
import { Task } from '@core/models/task.model'
import { LoadingComponent } from '@shared/components/loading/loading.component'
import { TaskStore } from '@tasks/store/task.store'

@Component({
  selector: 'task-status',
  imports: [FormsModule, LoadingComponent],
  templateUrl: './task-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative'
  }
})
export class TaskStatusComponent {
  columns = input.required<Column[]>()
  task = input.required<Task>()

  taskStore = inject(TaskStore)

  loading = signal<boolean>(false)

  async onColumnChange(columnId: string) {
    const id = this.task().id
    const task = { columnId }

    await this.taskStore.updateTask(id, task)
  }
}
