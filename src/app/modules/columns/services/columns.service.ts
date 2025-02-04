import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

import { environment } from '../../../../environments/environment'
import { Column, ColumnsResponse, GetColumnsParams } from '@columns/interfaces/columns.interface'

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = environment.url

  async getColumns({ boardId, limit, offset }: GetColumnsParams): Promise<Column[]> {
    const url = `${this.baseUrl}/api/columns?boardId=${boardId}&limit=${limit}&offset=${offset}`

    const response$ = this.http.get<ColumnsResponse>(url)
    const { columns } = await firstValueFrom(response$)

    return columns
  }
}
