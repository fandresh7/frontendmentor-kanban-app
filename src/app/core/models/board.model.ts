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
}
