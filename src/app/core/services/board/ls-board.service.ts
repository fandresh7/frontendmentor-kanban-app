import { Injectable } from '@angular/core'
import { Board } from '@core/models/board.model'
import { Column } from '@core/models/column.model'

@Injectable({
  providedIn: 'root'
})
export class LsBoardService {
  private readonly boardStorageKey = 'boards'
  private readonly columnStorageKey = 'columns'

  async getBoards(): Promise<Board[]> {
    const boardsJson = localStorage.getItem(this.boardStorageKey)
    const boards: Board[] = boardsJson ? JSON.parse(boardsJson) : []
    return boards
  }

  async createBoard(board: Partial<Board>, columns?: string[]): Promise<Board> {
    const boardId = new Date().getTime().toString()

    const newBoard: Board = {
      id: boardId,
      name: board.name || 'Untitled board'
    }

    const boards = await this.getBoards()

    boards.push(newBoard)
    localStorage.setItem(this.boardStorageKey, JSON.stringify(boards))

    if (columns && columns.length > 0) {
      const storedColumnsJson = localStorage.getItem(this.columnStorageKey)
      const storedColumns: Column[] = storedColumnsJson ? JSON.parse(storedColumnsJson) : []

      const newColumns = columns?.map((name, index) => ({
        id: `${boardId}-${index}`,
        name: name,
        order: index + 1,
        boardId: boardId
      })) as Column[]

      localStorage.setItem(this.columnStorageKey, JSON.stringify([...storedColumns, ...newColumns]))
    }

    return newBoard
  }

  async updateBoard(id: string, board: Partial<Board>, columns?: string[]): Promise<Board> {
    const boards = await this.getBoards()

    const index = boards.findIndex(b => b.id === id)
    if (index === -1) throw new Error('Board not found')

    const updatedBoard: Board = {
      ...boards[index],
      ...board
    }

    boards[index] = updatedBoard
    localStorage.setItem(this.boardStorageKey, JSON.stringify(boards))

    if (columns && columns.length > 0) {
      const storedColumnsJson = localStorage.getItem(this.columnStorageKey)
      const storedColumns: Column[] = storedColumnsJson ? JSON.parse(storedColumnsJson) : []

      const boardColumns = storedColumns.filter(col => col.boardId !== id)
      const otherColumns = storedColumns.filter(col => col.boardId !== id)

      const updatedBoardColumns: Column[] = []

      columns.forEach((name, index) => {
        const existingColumn = boardColumns.at(index)

        if (existingColumn) {
          const updatedColumn = { ...existingColumn, name, order: index + 1 }
          updatedBoardColumns.push(updatedColumn)
        } else {
          const newColumn = { id: `${updatedBoard.id}-${index}`, name, order: index + 1, boardId: updatedBoard.id }
          updatedBoardColumns.push(newColumn)
        }
      })

      const allColumns = [...updatedBoardColumns, ...otherColumns]
      localStorage.setItem(this.columnStorageKey, JSON.stringify(allColumns))
    }

    return updatedBoard
  }

  async deleteBoard(id: string): Promise<string> {
    let boards = await this.getBoards()
    boards = boards.filter(b => b.id !== id)
    localStorage.setItem(this.boardStorageKey, JSON.stringify(boards))
    return id
  }
}
