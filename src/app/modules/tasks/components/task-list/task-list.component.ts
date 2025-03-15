import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit, signal } from '@angular/core'
import { CdkDragDrop, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop'

import { Column } from '@core/models/column.model'
import { TaskStore } from '@tasks/store/task.store'
import { ColumnsStore } from '@columns/store/columns.store'
import { BoardsStore } from '@boards/store/boards.store'
import { Task } from '@core/models/task.model'
import { LoadingComponent } from '@shared/components/loading/loading.component'
import { TaskCardComponent } from '../task-card/task-card.component'

@Component({
  selector: 'task-list',
  imports: [DragDropModule, TaskCardComponent, LoadingComponent],
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  column = input.required<Column>()

  boardsStore = inject(BoardsStore)
  columnsStore = inject(ColumnsStore)
  tasksStore = inject(TaskStore)

  loading = signal<boolean>(false)

  columnsIds = computed(() => {
    const activeBoard = this.boardsStore.activeBoard()
    const columns = this.columnsStore.columns()

    const boardColumns = columns.filter(column => column.boardId === activeBoard?.id)
    const ids = boardColumns.map(column => column.id)

    return ids
  })

  tasks = computed(() => {
    const tasks = this.tasksStore.tasks()
    const columnId = this.column().id

    const columnTasks = tasks.filter(task => task.columnId === columnId)

    return columnTasks
  })

  ngOnInit(): void {
    this.getTasks()
  }

  async getTasks() {
    this.loading.set(true)

    await this.tasksStore.loadTasks(this.column().id)

    this.loading.set(false)
  }

  async dropTask(event: CdkDragDrop<Task[]>) {
    const { previousContainer, container, previousIndex, currentIndex } = event

    if (previousContainer === container) return

    const task = previousContainer.data[previousIndex]
    transferArrayItem(previousContainer.data, container.data, previousIndex, currentIndex)

    this.tasksStore.updateTask(task.id, { columnId: container.id })
  }
}
