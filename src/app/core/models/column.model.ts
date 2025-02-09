export interface ColumnsResponse {
  ok: boolean
  columns: Column[]
  total: number
}

export interface CreateColumnResponse {
  ok: boolean
  column: Column
}

export interface Column {
  id: string
  name: string
  order: number
  boardId: string
}
