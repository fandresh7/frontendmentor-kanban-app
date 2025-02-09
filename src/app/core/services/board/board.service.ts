import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

import { Board, BoardsResponse, CreateBoardResponse } from '@core/models/board.model'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = environment.url

  async getBoards(): Promise<Board[]> {
    const url = `${this.baseUrl}/api/boards`

    const response$ = this.http.get<BoardsResponse>(url)
    const { boards } = await firstValueFrom(response$)

    return boards
  }

  async createBoard(board: Partial<Board>, columns?: string[]): Promise<Board> {
    const url = `${this.baseUrl}/api/boards`

    const body = { ...board, columns }

    const response$ = this.http.post<CreateBoardResponse>(url, body)
    const response = await firstValueFrom(response$)

    return response.board
  }

  async updateBoard(id: string, board: Partial<Board>, columns?: string[]) {
    const url = `${this.baseUrl}/api/boards/${id}`

    const body = { ...board, columns }

    const response$ = this.http.patch<CreateBoardResponse>(url, body)
    const response = await firstValueFrom(response$)

    return response.board
  }

  async deleteBoard(id: string): Promise<string> {
    const url = `${this.baseUrl}/api/boards/${id}`

    const response$ = this.http.delete<CreateBoardResponse>(url)
    await firstValueFrom(response$)

    return id
  }
}
