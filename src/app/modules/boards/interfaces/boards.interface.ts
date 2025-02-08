import { Column } from '@columns/interfaces/columns.interface'

export interface BoardsResponse {
  ok: boolean
  boards: Board[]
  total: number
}

export interface CreateBoardResponse {
  ok: boolean
  board: Board
}

export interface Board {
  id: string
  name: string
  columns: Column[]
}

export interface GetBoardsParams {
  limit?: number
  offset?: number
}

export interface BoardsState {
  boards: Map<string, Board>
  activeBoard: Board | null
  loading: boolean
  currentPage: number
}
