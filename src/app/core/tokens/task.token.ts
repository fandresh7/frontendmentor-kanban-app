import { InjectionToken } from '@angular/core'
import { Subtask } from '@core/models/subtask.model'
import { Task } from '@core/models/task.model'

export interface ITaskService {
  getTasks(columnId: string): Promise<Task[]>
  createTask(task: Partial<Task>): Promise<Task>
  updateTask(taskId: string, task: Partial<Task>): Promise<Task>
  reorderTask(taskId: string, destinationOrder: number, destinationColumnId?: string): Promise<Task>
  deleteTask(id: string): Promise<string>
  updateSubtask(id: string, taskId: string, subtask: Partial<Subtask>): Promise<Subtask>
}

export const TASK_SERVICE = new InjectionToken<ITaskService>('TaskService')
