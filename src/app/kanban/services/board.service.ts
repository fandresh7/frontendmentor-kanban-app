import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { Board } from '../interfaces/boards'

interface BoardsState {
  boards: Board[]
  loading: false
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  http = inject(HttpClient)

  state = signal<BoardsState>({
    boards: [],
    loading: false
  })
}
