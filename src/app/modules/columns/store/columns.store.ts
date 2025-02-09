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

  async loadColumns(boardId: string, forceFetch?: boolean) {
    const state = this.state()
    const { columns, loadedBoardIds } = state

    if (loadedBoardIds.has(boardId) && !forceFetch) return

    this.updateLoadingState(true)

    try {
      const newColumns = await this.columnService.getColumns(boardId)
      newColumns.forEach(column => columns.set(column.id, column))

      loadedBoardIds.add(boardId)
      this.state.set({ ...this.state(), columns, loadedBoardIds })
    } finally {
      this.updateLoadingState(false)
    }
  }

  getBoardColumns(boardId: string) {
    const columns = this.columns()
    return columns.filter(column => column.boardId === boardId)
  }

  private updateLoadingState(loading: boolean) {
    this.state.set({ ...this.state(), loading })
  }
}
