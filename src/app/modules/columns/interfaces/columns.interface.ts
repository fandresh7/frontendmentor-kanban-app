import { Task } from '@tasks/interfaces/tasks.interface'

export interface ColumnsResponse {
  ok: boolean
  columns: Column[]
  total: number
}

export interface Column {
  id: string
  name: string
  tasks: Task[]
}

export interface GetColumnsParams {
  boardId: string
  limit?: number
  offset?: number
}

export interface ColumnsState {
  columns: Map<string, Column>
  loading: boolean
  currentPage: number
}
