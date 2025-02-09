import { Dialog, DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'

import { BoardsStore } from '@boards/store/boards.store'
import { ColumnsStore } from '@columns/store/columns.store'

import { TaskAddEditModalComponent } from '../task-add-edit-modal/task-add-edit-modal.component'
import { TaskDeleteModalComponent } from '../task-delete-modal/task-delete-modal.component'

import { Task } from '@core/models/task.model'
import { EllipsisIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'task-details-modal',
  imports: [EllipsisIconComponent],
  templateUrl: './task-details-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class TaskDetailsModalComponent {
  dialog = inject(Dialog)
  data = inject<Task>(DIALOG_DATA)
  dialogRef = inject(DialogRef<TaskDetailsModalComponent>)

  boardsStore = inject(BoardsStore)
  activeBoard = computed(() => this.boardsStore.activeBoard())

  columnsStore = inject(ColumnsStore)

  boardColumns = computed(() => {
    const activeBoard = this.activeBoard()
    const columns = this.columnsStore.columns()

    return columns.filter(column => column.boardId === activeBoard?.id)
  })

  actionDropdown = signal<boolean>(false)

  getCompletedSubtasks() {
    const subtasks = this.data.subTasks
    return subtasks.filter(subtask => subtask.isCompleted)
  }

  toggleActionDropdown() {
    this.actionDropdown.update(value => !value)
  }

  openEditTaskModal() {
    this.closeModal()

    this.dialog.open(TaskAddEditModalComponent, {
      autoFocus: undefined,
      data: this.data
    })
  }

  openDeleteTaskModal() {
    this.closeModal()
    this.dialog.open(TaskDeleteModalComponent, {
      autoFocus: undefined,
      data: this.data
    })
  }

  closeModal() {
    this.dialogRef.close()
  }
}
