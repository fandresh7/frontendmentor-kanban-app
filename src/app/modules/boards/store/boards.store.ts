import { computed, inject, Injectable, signal } from '@angular/core'
import { Board, BoardsState } from '@boards/interfaces/boards.interface'
import { BoardsService } from '@boards/services/boards.service'
import { getLimitAndOffset } from '@shared/utils/pagination'

@Injectable({
  providedIn: 'root'
})
export class BoardsStore {
  private readonly boardsService = inject(BoardsService)

  private state = signal<BoardsState>({
    boards: new Map<string, Board>(),
    activeBoard: null,
    loading: false,
    currentPage: 0
  })

  boards = computed(() => Array.from(this.state().boards.values()))
  activeBoard = computed(() => this.state().activeBoard)
  loading = computed(() => this.state().loading)
  currentPage = computed(() => this.state().currentPage)

  async loadBoards(): Promise<void> {
    this.updateLoadingState(true)

    const page = this.currentPage()
    const { limit, offset } = getLimitAndOffset(page)

    try {
      const newBoards = await this.boardsService.getBoards({ limit, offset })
      if (newBoards.length > 0) {
        this.setBoardsToStore(newBoards, page + 1)
      } else {
        console.log('there is not boards.')
      }
    } finally {
      this.updateLoadingState(false)
    }
  }

  async createBoard(boardData: Partial<Board>, columns?: string[]): Promise<Board> {
    this.updateLoadingState(true)

    try {
      const newBoard = await this.boardsService.createBoard(boardData as Board, columns)
      this.addNewBoardToStore(newBoard)

      return newBoard
    } finally {
      this.updateLoadingState(false)
    }
  }

  async updateBoard(id: string, board: Partial<Board>, columns?: string[]): Promise<void> {
    this.updateLoadingState(true)
    try {
      const updatedBoard = await this.boardsService.updateBoard(id, board, columns)
      this.updateBoardToStore(id, updatedBoard)
    } finally {
      this.updateLoadingState(false)
    }
  }

  async deleteBoard(id: string): Promise<void> {
    this.updateLoadingState(true)
    try {
      await this.boardsService.deleteBoard(id)
      this.removeBoardFromStore(id)
    } finally {
      this.updateLoadingState(false)
    }
  }

  changeActiveBoard(board: Board): void {
    this.state.set({ ...this.state(), activeBoard: board })
  }

  private setBoardsToStore(boards: Board[], nextPage: number): void {
    const currentBoards = new Map(this.state().boards)
    boards.forEach(board => currentBoards.set(board.id, board))

    this.state.set({
      ...this.state(),
      boards: currentBoards,
      loading: false,
      currentPage: nextPage
    })
  }

  private addNewBoardToStore(board: Board): void {
    const currentBoards = new Map(this.state().boards)
    currentBoards.set(board.id, board)

    this.state.set({ ...this.state(), boards: currentBoards, activeBoard: board })
  }

  private updateBoardToStore(id: string, board: Partial<Board>) {
    const currentBoards = new Map(this.state().boards)
    const existingBoard = currentBoards.get(id)

    if (existingBoard) {
      currentBoards.set(id, { ...existingBoard, ...board })
      this.state.set({ ...this.state(), boards: currentBoards })
    }
  }

  private removeBoardFromStore(id: string): void {
    const currentBoards = new Map(this.state().boards)
    currentBoards.delete(id)

    this.state.set({ ...this.state(), boards: currentBoards, activeBoard: null })
  }

  private updateLoadingState(loading: boolean): void {
    this.state.set({ ...this.state(), loading })
  }
}
