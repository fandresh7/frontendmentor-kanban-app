import { computed, inject, Injectable, signal } from '@angular/core'
import { Subtask } from '@core/models/subtask.model'
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

  async createTask(task: Partial<Task>) {
    this.updateLoadingState(true)

    try {
      const newTask = await this.taskService.createTask(task)

      const currentTasks = new Map(this.state().tasks)
      currentTasks.set(newTask.id, newTask)

      this.state.set({ ...this.state(), tasks: currentTasks })

      return newTask
    } finally {
      this.updateLoadingState(false)
    }
  }

  async updateTask(id: string, task: Partial<Task>) {
    try {
      const updatedTask = await this.taskService.updateTask(id, task)

      const currentTasks = new Map(this.state().tasks)
      currentTasks.set(id, updatedTask)

      this.state.set({ ...this.state(), tasks: currentTasks })

      return updatedTask
    } finally {
      this.updateLoadingState(false)
    }
  }

  async reorderTask(id: string, destinationOrder: number, destinationColumnId?: string) {
    await this.taskService.reorderTask(id, destinationOrder, destinationColumnId)

    const tasks = this.state().tasks
    const task = tasks.get(id)

    if (!task) return
    task.columnId = destinationColumnId || task.columnId
    task.order = destinationOrder

    tasks.set(id, task)
    this.state.set({ ...this.state(), tasks })
  }

  async deleteTask(id: string): Promise<void> {
    this.updateLoadingState(true)

    try {
      await this.taskService.deleteTask(id)

      const currentTasks = new Map(this.state().tasks)
      currentTasks.delete(id)

      this.state.set({ ...this.state(), tasks: currentTasks })
    } finally {
      this.updateLoadingState(false)
    }
  }

  async updateSubtask(id: string, taskId: string, subtask: Partial<Subtask>) {
    this.updateLoadingState(true)

    try {
      const updatedSubtask = await this.taskService.updateSubtask(id, taskId, subtask)

      const currentTasks = new Map(this.state().tasks)
      const task = currentTasks.get(taskId)

      if (!task) return

      const updatedSubtasks = task.subtasks.map(s => {
        return s.id === id ? updatedSubtask : s
      })

      const updatedTask = { ...task, subtasks: updatedSubtasks }
      currentTasks.set(taskId, updatedTask)

      this.state.set({ ...this.state(), tasks: currentTasks })

      return updatedSubtask
    } finally {
      this.updateLoadingState(false)
    }
  }

  resetStore() {
    this.state.set({ tasks: new Map(), loadedColumnsIds: new Set(), loading: false })
  }

  private updateLoadingState(loading: boolean) {
    this.state.set({ ...this.state(), loading })
  }
}
