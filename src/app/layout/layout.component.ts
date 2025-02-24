import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NgClass } from '@angular/common'

import { SidebarService } from '@shared/services/sidebar.service'
import { ShowIconComponent } from '@shared/components/icons/icons.component'

import { BoardsStore } from '@boards/store/boards.store'
import { ColumnsStore } from '@columns/store/columns.store'
import { TaskStore } from '@tasks/store/task.store'

import { SidebarComponent } from './components/sidebar/sidebar.component'
import { HeaderComponent } from './components/header/header.component'

@Component({
  selector: 'layout',
  imports: [RouterOutlet, NgClass, SidebarComponent, HeaderComponent, ShowIconComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnDestroy {
  sidebarService = inject(SidebarService)
  sidebar = this.sidebarService.sidebar

  boardsStore = inject(BoardsStore)
  columnsStore = inject(ColumnsStore)
  tasksStore = inject(TaskStore)

  ngOnDestroy(): void {
    this.boardsStore.resetStore()
    this.columnsStore.resetStore()
    this.tasksStore.resetStore()
  }
}
