import { Injectable } from '@angular/core'
import { Column } from '@core/models/column.model'

@Injectable({
  providedIn: 'root'
})
export class LsColumnService {
  private readonly columnStorageKey = 'columns'

  async getColumns(boardId: string): Promise<Column[]> {
    const columnsJson = localStorage.getItem(this.columnStorageKey)
    const columns: Column[] = columnsJson ? JSON.parse(columnsJson) : []

    return columns.filter(col => col.boardId === boardId)
  }

  async createColumn(boardId: string, column: Partial<Column>): Promise<Column> {
    const columnsJson = localStorage.getItem(this.columnStorageKey)
    const columns: Column[] = columnsJson ? JSON.parse(columnsJson) : []

    const newId = new Date().getTime().toString()

    const newColumn: Column = {
      id: newId,
      boardId,
      name: column.name || 'Untitled Column',
      order: column.order || columns.filter(c => c.boardId === boardId).length + 1
    }

    columns.push(newColumn)
    localStorage.setItem(this.columnStorageKey, JSON.stringify(columns))

    return newColumn
  }

  async updateColumn(columnId: string, column: Partial<Column>): Promise<Column> {
    const columnsJson = localStorage.getItem(this.columnStorageKey)
    const columns: Column[] = columnsJson ? JSON.parse(columnsJson) : []

    const index = columns.findIndex(col => col.id === columnId)
    if (index === -1) throw new Error('Column not found')

    const updatedColumn: Column = {
      ...columns[index],
      ...column
    }

    columns[index] = updatedColumn
    localStorage.setItem(this.columnStorageKey, JSON.stringify(columns))

    return updatedColumn
  }

  async reorderColumn(columnId: string, boardId: string, destinationOrder: number): Promise<Column> {
    const columnsJson = localStorage.getItem(this.columnStorageKey)
    const columns: Column[] = columnsJson ? JSON.parse(columnsJson) : []

    const otherColumns = columns.filter(col => col.boardId !== boardId)
    const boardColumns = columns.filter(col => col.boardId === boardId)
    if (boardColumns.length === 0) throw new Error('No columns found for this board')

    const movingColumnIndex = boardColumns.findIndex(col => col.id === columnId)
    if (movingColumnIndex === -1) throw new Error('Column not found')

    const column = boardColumns.at(movingColumnIndex)!
    const updatedColumns = boardColumns.filter(column => column.id !== columnId)

    updatedColumns.splice(destinationOrder, 0, column)

    const updatedColumnsOrder = updatedColumns.map((column, index) => ({ ...column, order: index + 1 }))
    const allColumns = [...otherColumns, ...updatedColumnsOrder]

    localStorage.setItem(this.columnStorageKey, JSON.stringify(allColumns))
    return boardColumns.find(c => c.id === columnId)!
  }

  async deleteColumn(id: string): Promise<string> {
    const columnsJson = localStorage.getItem(this.columnStorageKey)
    const columns: Column[] = columnsJson ? JSON.parse(columnsJson) : []

    const updatedColumns = columns.filter(col => col.id !== id)
    localStorage.setItem(this.columnStorageKey, JSON.stringify(updatedColumns))

    return id
  }
}
