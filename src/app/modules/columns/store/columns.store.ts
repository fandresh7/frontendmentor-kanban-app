import { computed, inject, Injectable, signal } from '@angular/core'
import { ColumnsState } from '@columns/interfaces/columns-store.interface'

import { Column } from '@core/models/column.model'
import { ColumnService } from '@core/services/column/column.service'

@Injectable({
  providedIn: 'root'
})
export class ColumnsStore {
  private readonly columnService = inject(ColumnService)

  private state = signal<ColumnsState>({
    columns: new Map<string, Column>(),
    loading: false,
    loadedBoardIds: new Set<string>()
  })

  columns = computed(() => Array.from(this.state().columns.values()))
  loading = computed(() => this.state().loading)
  loadedBoardIds = computed(() => this.state().loadedBoardIds)

  async loadColumns(boardId: string, forceReload?: boolean) {
    const state = this.state()
    const { columns, loadedBoardIds } = state

    if (loadedBoardIds.has(boardId) && !forceReload) return

    this.updateLoadingState(true)

    try {
      columns.forEach(column => {
        if (column.boardId === boardId) columns.delete(column.id)
      })

      const newColumns = await this.columnService.getColumns(boardId)
      newColumns.forEach(column => columns.set(column.id, column))

      const updatedLoadedBoardIds = new Set(loadedBoardIds)
      updatedLoadedBoardIds.add(boardId)

      this.state.set({ ...this.state(), columns, loadedBoardIds: updatedLoadedBoardIds })
    } finally {
      this.updateLoadingState(false)
    }
  }

  async createColumn(boardId: string, column: Partial<Column>) {
    this.updateLoadingState(true)

    try {
      const newColumn = await this.columnService.createColumn(boardId, column)

      const currentColumns = new Map(this.state().columns)
      currentColumns.set(newColumn.id, newColumn)

      this.state.set({ ...this.state(), columns: currentColumns })

      return newColumn
    } finally {
      this.updateLoadingState(false)
    }
  }

  async reorderColumn(id: string, boardId: string, destinationOrder: number) {
    await this.columnService.reorderColumn(id, boardId, destinationOrder)
  }

  getBoardColumns(boardId: string) {
    const columns = this.columns()
    return columns.filter(column => column.boardId === boardId)
  }

  resetStore() {
    this.state.set({ columns: new Map(), loadedBoardIds: new Set(), loading: false })
  }

  private updateLoadingState(loading: boolean) {
    this.state.set({ ...this.state(), loading })
  }
}
