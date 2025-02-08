import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, HostListener, inject } from '@angular/core'
import { NgClass } from '@angular/common'

import { Board } from '@boards/interfaces/boards.interface'
import { BoardsStore } from '@boards/store/boards.store'
import { BoardAddEditModalComponent } from '../board-add-edit-modal/board-add-edit-modal.component'

import { SidebarService } from '@shared/services/sidebar.service'
import { BoardIconComponent, plusIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'board-list',
  imports: [NgClass, BoardIconComponent, plusIconComponent],
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative flex flex-col px-6 overflow-y-auto',
    scroll: 'onScroll($event)'
  }
})
export class BoardListComponent {
  dialog = inject(Dialog)

  sidebarService = inject(SidebarService)
  boardsStore = inject(BoardsStore)

  boards = computed(() => this.boardsStore.boards())
  activeBoard = computed(() => this.boardsStore.activeBoard())
  loading = computed(() => this.boardsStore.loading())

  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    const element = event.target as HTMLElement
    const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight
    if (atBottom) {
      this.boardsStore.loadBoards()
    }
  }

  constructor() {
    this.boardsStore.loadBoards()
  }

  openAddEditModal() {
    this.sidebarService.closeSidebar()
    this.dialog.open(BoardAddEditModalComponent, {
      data: {
        type: 'new'
      }
    })
  }

  changeActiveBoard(board: Board) {
    this.boardsStore.changeActiveBoard(board)
  }
}
