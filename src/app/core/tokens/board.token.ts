import { InjectionToken } from '@angular/core'
import { Board } from '@core/models/board.model'

export interface IBoardService {
  getBoards(): Promise<Board[]>
  createBoard(board: Partial<Board>, columns?: string[]): Promise<Board>
  updateBoard(id: string, board: Partial<Board>, columns?: string[]): Promise<Board>
  deleteBoard(id: string): Promise<string>
}

export const BOARD_SERVICE = new InjectionToken<IBoardService>('BoardService')
