import { computed, inject, Injectable, signal } from '@angular/core'
import { Board, BoardsState } from '@boards/interfaces/boards.interface'
import { BoardsService } from '@boards/services/boards.service'
import { Column } from '@columns/interfaces/columns.interface'
import { ColumnsService } from '@columns/services/columns.service'
import { getLimitAndOffset } from '@shared/utils/pagination'

@Injectable({
  providedIn: 'root'
})
export class BoardsStore {
  private readonly boardsService = inject(BoardsService)
  private readonly columnsService = inject(ColumnsService)

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
      this.updateBoardToStore(updatedBoard.id, updatedBoard)
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

  async createColumn(boardId: string, column: Partial<Column>) {
    this.updateLoadingState(true)

    try {
      const newColumn = await this.columnsService.createColumn(boardId, column)
      this.addColumnToStore(boardId, newColumn)
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

  private updateBoardToStore(id: string, board: Partial<Board>): void {
    const currentBoards = new Map(this.state().boards)
    const existingBoard = currentBoards.get(id)

    if (!existingBoard) return
    const updatedBoard = { ...existingBoard, ...board }

    currentBoards.set(id, updatedBoard)
    this.state.set({ ...this.state(), boards: currentBoards, activeBoard: updatedBoard })
  }

  private removeBoardFromStore(id: string): void {
    const currentBoards = new Map(this.state().boards)
    currentBoards.delete(id)

    this.state.set({ ...this.state(), boards: currentBoards, activeBoard: null })
  }

  private addColumnToStore(boardId: string, column: Column): void {
    const currentBoards = new Map(this.state().boards)

    const board = currentBoards.get(boardId)
    if (!board) return

    const updateBoard = { ...board, columns: [...board.columns, column] }
    currentBoards.set(boardId, updateBoard)

    this.state.set({ ...this.state(), boards: currentBoards, activeBoard: updateBoard })
  }

  private updateLoadingState(loading: boolean): void {
    this.state.set({ ...this.state(), loading })
  }
}
