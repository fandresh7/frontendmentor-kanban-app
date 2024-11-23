import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { Dialog, DialogModule } from '@angular/cdk/dialog'
import { NgClass } from '@angular/common'

import { BoardService } from '../../services/board.service'
import { SidebarService } from '../../../layout/services/sidebar.service'
import { AddEditBoardModalComponent } from '../add-edit-board-modal/add-edit-board-modal.component'
import { BoardIconComponent, plusIconComponent } from '../../../shared/components/icons.component'

@Component({
  selector: 'board-list',
  standalone: true,
  imports: [DialogModule, NgClass, BoardIconComponent, plusIconComponent],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative flex flex-col'
  }
})
export class BoardListComponent {
  dialog = inject(Dialog)

  boardService = inject(BoardService)
  sidebarService = inject(SidebarService)

  boards = computed(() => this.boardService.boards())
  loading = computed(() => this.boardService.loading())
  activeBoard = computed(() => this.boardService.activeBoard())

  openAddEditModal() {
    this.sidebarService.closeSidebar()
    this.dialog.open(AddEditBoardModalComponent)
  }
}
