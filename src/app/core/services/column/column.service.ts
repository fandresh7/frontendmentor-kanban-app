import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Column, ColumnsResponse, CreateColumnResponse } from '@core/models/column.model'
import { firstValueFrom } from 'rxjs'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = environment.url

  async getColumns(boardId: string): Promise<Column[]> {
    const url = `${this.baseUrl}/api/columns?boardId=${boardId}`

    const response$ = this.http.get<ColumnsResponse>(url)
    const { columns } = await firstValueFrom(response$)

    return columns
  }

  async createColumn(boardId: string, column: Partial<Column>) {
    const url = `${this.baseUrl}/api/columns`

    const body = {
      ...column,
      boardId
    }

    const response$ = this.http.post<CreateColumnResponse>(url, body)
    const response = await firstValueFrom(response$)

    return response.column
  }

  async updateColumn(columnId: string, column: Partial<Column>): Promise<Column> {
    const url = `${this.baseUrl}/api/columns/${columnId}`

    const response$ = this.http.patch<CreateColumnResponse>(url, column)
    const response = await firstValueFrom(response$)

    return response.column
  }

  async reorderColumn(columnId: string, boardId: string, destinationOrder: number) {
    const url = `${this.baseUrl}/api/columns/${columnId}/reorder`

    const body = { boardId, destinationOrder }

    const response$ = this.http.patch(url, body)
    const response = await firstValueFrom(response$)

    return response
  }

  async deleteColumn(id: string) {
    const url = `${this.baseUrl}/api/columns/${id}`

    const response$ = this.http.delete(url)
    await firstValueFrom(response$)

    return id
  }
}
