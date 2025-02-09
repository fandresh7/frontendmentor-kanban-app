import { Subtask } from './subtask.model'

export interface TasksResponse {
  ok: boolean
  tasks: Task[]
}

export interface Task {
  id: string
  title: string
  description: string
  status: string
  subTasks: Subtask[]
  columnId: string
}
