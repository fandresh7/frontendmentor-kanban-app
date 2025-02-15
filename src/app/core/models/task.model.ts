import { Subtask } from './subtask.model'

export interface TasksResponse {
  ok: boolean
  tasks: Task[]
}

export interface CreateTaskResponse {
  ok: boolean
  task: Task
  message: string
}

export interface Task {
  id: string
  title: string
  description: string
  subtasks: Subtask[]
  columnId: string
}
