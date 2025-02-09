import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

import { environment } from '../../../../environments/environment'
import { Task, TasksResponse } from '@core/models/task.model'

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
}
