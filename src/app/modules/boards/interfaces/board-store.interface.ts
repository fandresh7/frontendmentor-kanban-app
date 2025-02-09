import { Board } from '@core/models/board.model'

export interface BoardsState {
  boards: Map<string, Board>
  activeBoard: Board | null
  loading: boolean
}
