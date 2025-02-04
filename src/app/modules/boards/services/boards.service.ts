import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

import { environment } from '../../../../environments/environment'
import { Board, BoardsResponse, CreateBoardResponse, GetBoardsParams } from '@boards/interfaces/boards.interface'

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = environment.url

  async getBoards({ limit, offset }: GetBoardsParams): Promise<Board[]> {
    const url = `${this.baseUrl}/api/boards?limit=${limit}&offset=${offset}`

    const response$ = this.http.get<BoardsResponse>(url)
    const { boards } = await firstValueFrom(response$)

    return boards
  }

  async createBoard(board: Partial<Board>): Promise<Board> {
    const url = `${this.baseUrl}/api/boards`

    const response$ = this.http.post<CreateBoardResponse>(url, board)
    const response = await firstValueFrom(response$)

    return response.board
  }

  async updateBoard(id: string, board: Partial<Board>) {
    const url = `${this.baseUrl}/api/boards/${id}`

    const response$ = this.http.patch<CreateBoardResponse>(url, board)
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
