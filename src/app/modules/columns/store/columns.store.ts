import { computed, inject, Injectable, signal } from '@angular/core'
import { Column, ColumnsState } from '@columns/interfaces/columns.interface'
import { ColumnsService } from '@columns/services/columns.service'
import { getLimitAndOffset } from '@shared/utils/pagination'

@Injectable({
  providedIn: 'root'
})
export class ColumnsStore {
  private readonly columnsService = inject(ColumnsService)

  state = signal<ColumnsState>({
    columns: new Map<string, Column>(),
    loading: false,
    currentPage: 0
  })

  columns = computed(() => Array.from(this.state().columns.values()))
  loading = computed(() => this.state().loading)
  currentPage = computed(() => this.state().currentPage)

  async loadColumns(boardId: string, restore?: boolean) {
    if (restore) this.resetStore()
    this.updateLoadingState(true)

    const page = this.currentPage()
    const { limit, offset } = getLimitAndOffset(page)

    try {
      const newColumns = await this.columnsService.getColumns({ boardId, limit, offset })
      if (newColumns.length > 0) {
        this.setColumnsToStore(newColumns, page + 1)
      } else {
        console.log('there is not columns.')
      }
    } finally {
      this.updateLoadingState(false)
    }
  }

  async createColumn(boardId: string, columnData: Partial<Column>): Promise<Column> {
    this.updateLoadingState(true)

    try {
      const newColumn = await this.columnsService.createColumn(boardId, columnData as Column)
      console.log({ newColumn })
      this.addNewColumnToStore(newColumn)

      return newColumn
    } finally {
      this.updateLoadingState(false)
    }
  }

  resetStore() {
    this.state.set({
      columns: new Map<string, Column>(),
      loading: false,
      currentPage: 0
    })
  }

  private setColumnsToStore(columns: Column[], nextPage: number): void {
    const currentColumns = new Map(this.state().columns)
    columns.forEach(column => currentColumns.set(column.id, column))

    this.state.set({
      columns: currentColumns,
      loading: false,
      currentPage: nextPage
    })
  }

  private addNewColumnToStore(column: Column): void {
    const currentColumns = new Map(this.state().columns)
    currentColumns.set(column.id, column)

    this.state.set({ ...this.state(), columns: currentColumns })
  }

  private updateLoadingState(loading: boolean): void {
    this.state.set({ ...this.state(), loading })
  }
}
