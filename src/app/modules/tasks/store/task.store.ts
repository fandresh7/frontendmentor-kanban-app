import { computed, inject, Injectable, signal } from '@angular/core'
import { Task } from '@core/models/task.model'
import { TaskService } from '@core/services/task/task.service'
import { TasksState } from '@tasks/interfaces/tasks-state.interface'

@Injectable({
  providedIn: 'root'
})
export class TaskStore {
  private readonly taskService = inject(TaskService)

  private state = signal<TasksState>({
    tasks: new Map<string, Task>(),
    loading: false,
    loadedColumnsIds: new Set()
  })

  tasks = computed(() => Array.from(this.state().tasks.values()))
  loading = computed(() => this.state().loading)
  loadedColumnsIds = computed(() => this.state().loadedColumnsIds)

  async loadTasks(columnId: string, forceReload?: boolean) {
    const state = this.state()
    const { tasks, loadedColumnsIds } = state

    if (loadedColumnsIds.has(columnId) && !forceReload) return

    this.updateLoadingState(true)

    try {
      const newTasks = await this.taskService.getTasks(columnId)
      newTasks.forEach(task => tasks.set(task.id, task))

      const updatedLoadedColumnIds = new Set(loadedColumnsIds)
      updatedLoadedColumnIds.add(columnId)

      this.state.set({ ...this.state(), tasks, loadedColumnsIds: updatedLoadedColumnIds })
    } finally {
      this.updateLoadingState(false)
    }
  }

  private updateLoadingState(loading: boolean) {
    this.state.set({ ...this.state(), loading })
  }
}
