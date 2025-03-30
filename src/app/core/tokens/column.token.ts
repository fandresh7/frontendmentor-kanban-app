import { InjectionToken } from '@angular/core'
import { Column } from '@core/models/column.model'

export interface IColumnService {
  getColumns(boardId: string): Promise<Column[]>
  createColumn(boardId: string, column: Partial<Column>): Promise<Column>
  updateColumn(columnId: string, column: Partial<Column>): Promise<Column>
  reorderColumn(columnId: string, boardId: string, destinationOrder: number): Promise<Column>
  deleteColumn(id: string): Promise<string>
}

export const COLUMN_SERVICE = new InjectionToken<IColumnService>('ColumnService')
