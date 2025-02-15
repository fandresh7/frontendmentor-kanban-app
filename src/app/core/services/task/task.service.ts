import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

import { environment } from '../../../../environments/environment'
import { CreateSubtaskResponse, CreateTaskResponse, Task, TasksResponse } from '@core/models/task.model'
import { Subtask } from '@core/models/subtask.model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = environment.url

  async getTasks(columnId: string): Promise<Task[]> {
    const url = `${this.baseUrl}/api/tasks?columnId=${columnId}`

    const response$ = this.http.get<TasksResponse>(url)
    const { tasks } = await firstValueFrom(response$)

    return tasks
  }

  async createTask(task: Partial<Task>): Promise<Task> {
    const url = `${this.baseUrl}/api/tasks`

    const response$ = this.http.post<CreateTaskResponse>(url, task)
    const response = await firstValueFrom(response$)

    return response.task
  }

  async updateTask(taskId: string, task: Partial<Task>): Promise<Task> {
    const url = `${this.baseUrl}/api/tasks/${taskId}`

    const response$ = this.http.patch<CreateTaskResponse>(url, task)
    const response = await firstValueFrom(response$)

    return response.task
  }

  async deleteTask(id: string): Promise<string> {
    const url = `${this.baseUrl}/api/tasks/${id}`

    const response$ = this.http.delete(url)
    await firstValueFrom(response$)

    return id
  }

  async updateSubtask(id: string, taskId: string, subtask: Partial<Subtask>) {
    const url = `${this.baseUrl}/api/subtasks/${id}`

    const body = { ...subtask, taskId }

    const response$ = this.http.patch<CreateSubtaskResponse>(url, body)
    const response = await firstValueFrom(response$)

    return response.subtask
  }
}
