import { Task } from '@core/models/task.model'

export interface TasksState {
  tasks: Map<string, Task>
  loading: boolean
  loadedColumnsIds: Set<string>
}
