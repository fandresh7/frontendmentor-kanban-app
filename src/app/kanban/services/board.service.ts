import { computed, Injectable, signal } from '@angular/core'
import { of } from 'rxjs'

import { Board } from '../interfaces/boards'
import { BOARDS } from '../data/boards-mock'

interface BoardsState {
  boards: Map<string, Board>
  activeBoard: Board | null
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private state = signal<BoardsState>({
    boards: new Map<string, Board>(),
    activeBoard: null,
    loading: false
  })

  boards = computed(() => Array.from(this.state().boards.values()))
  loading = computed(() => this.state().loading)
  activeBoard = computed(() => this.state().activeBoard)

  constructor() {
    this.getBoards()
  }

  getBoards() {
    of(BOARDS).subscribe(response => {
      const boards = new Map<string, Board>(response.map(board => [board.id, board]))
      const activeBoard = boards.size === 0 ? null : Array.from(boards.values())[0]

      this.state.update(state => ({ ...state, boards, activeBoard }))
    })
  }
}
