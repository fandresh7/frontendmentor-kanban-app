import { computed, inject, Injectable, signal } from '@angular/core'
import { BoardsState } from '@boards/interfaces/board-store.interface'
import { Board } from '@core/models/board.model'
import { BoardService } from '@core/services/board/board.service'

@Injectable({
  providedIn: 'root'
})
export class BoardsStore {
  private readonly boardService = inject(BoardService)

  private state = signal<BoardsState>({
    boards: new Map<string, Board>(),
    activeBoard: null,
    loading: false
  })

  boards = computed(() => Array.from(this.state().boards.values()))
  activeBoard = computed(() => this.state().activeBoard)
  loading = computed(() => this.state().loading)

  async loadBoards() {
    this.updateLoadingState(true)

    try {
      const newBoards = await this.boardService.getBoards()

      const boards = this.state().boards
      newBoards.forEach(board => boards.set(board.id, board))

      this.state.set({ ...this.state(), boards })
    } finally {
      this.updateLoadingState(false)
    }
  }

  async createBoard(board: Partial<Board>, columns?: string[]) {
    this.updateLoadingState(true)

    try {
      const newBoard = await this.boardService.createBoard(board, columns)

      const currentBoards = new Map(this.state().boards)
      currentBoards.set(newBoard.id, newBoard)

      this.state.set({ ...this.state(), boards: currentBoards, activeBoard: newBoard })

      return newBoard
    } finally {
      this.updateLoadingState(false)
    }
  }

  async updateBoard(id: string, board: Partial<Board>, columns?: string[]) {
    this.updateLoadingState(true)

    try {
      const updatedBoard = await this.boardService.updateBoard(id, board, columns)

      const currentBoards = new Map(this.state().boards)
      currentBoards.set(id, updatedBoard)

      this.state.set({ ...this.state(), boards: currentBoards, activeBoard: updatedBoard })

      return updatedBoard
    } finally {
      this.updateLoadingState(false)
    }
  }

  async deleteBoard(id: string): Promise<void> {
    this.updateLoadingState(true)
    try {
      await this.boardService.deleteBoard(id)

      const currentBoards = new Map(this.state().boards)
      currentBoards.delete(id)

      this.state.set({ ...this.state(), boards: currentBoards, activeBoard: null })
    } finally {
      this.updateLoadingState(false)
    }
  }

  changeActiveBoard(board: Board) {
    this.state.set({ ...this.state(), activeBoard: board })
  }

  private updateLoadingState(loading: boolean) {
    this.state.set({ ...this.state(), loading })
  }
}
