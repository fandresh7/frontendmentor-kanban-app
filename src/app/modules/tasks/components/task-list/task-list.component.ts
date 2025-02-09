import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit, signal } from '@angular/core'
import { Column } from '@core/models/column.model'
import { TaskStore } from '@tasks/store/task.store'
import { TaskCardComponent } from '../task-card/task-card.component'

@Component({
  selector: 'task-list',
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-[calc(100dvh-12rem)] flex-col gap-4 overflow-y-auto pb-4'
  }
})
export class TaskListComponent implements OnInit {
  column = input.required<Column>()

  tasksStore = inject(TaskStore)

  loading = signal<boolean>(false)

  tasks = computed(() => {
    const tasks = this.tasksStore.tasks()
    const columnId = this.column().id

    const columnTasks = tasks.filter(task => task.columnId === columnId)

    return columnTasks
  })

  ngOnInit(): void {
    this.getTasks()
  }

  async getTasks() {
    this.loading.set(true)

    await this.tasksStore.loadTasks(this.column().id)

    this.loading.set(false)
  }
}
