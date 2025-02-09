import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core'
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

import { TaskAddEditModalComponent } from '@tasks/components/task-add-edit-modal/task-add-edit-modal.component'
import { BoardsStore } from '@boards/store/boards.store'
import { CloseIconComponent, plusIconComponent } from '@shared/components/icons/icons.component'
import { ColumnsStore } from '@columns/store/columns.store'

interface BoardForm {
  name: FormControl<string>
  columns: FormArray<FormControl<string>>
}

@Component({
  selector: 'board-add-edit-modal',
  imports: [ReactiveFormsModule, CloseIconComponent, plusIconComponent],
  templateUrl: './board-add-edit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class BoardAddEditModalComponent implements OnInit {
  fb = inject(FormBuilder)

  dialogRef = inject(DialogRef<TaskAddEditModalComponent>)
  data = inject(DIALOG_DATA)

  columnsStore = inject(ColumnsStore)

  boardsStore = inject(BoardsStore)
  activeBoard = computed(() => this.boardsStore.activeBoard())

  loading = signal<boolean>(false)

  form = this.fb.group<BoardForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    columns: this.fb.array<FormControl<string>>([])
  })

  get columns() {
    return this.form.get('columns') as FormArray
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.controls.name.setValue(this.activeBoard()!.name)

      const boardColumns = this.columnsStore.getBoardColumns(this.activeBoard()!.id)
      boardColumns.forEach(column => this.addNewColumnField(column.name))
    }
  }

  addNewColumnField(value?: string) {
    this.columns.push(new FormControl(value ?? '', { nonNullable: true, validators: [Validators.required] }))
  }

  removeColumnField(index: number) {
    if (this.columns.length > 1) this.columns.removeAt(index)
  }

  async submit() {
    if (this.form.invalid) return

    this.loading.set(true)

    if (this.data.type === 'new') {
      await this.createBoard()
    } else {
      await this.editBoard()
    }

    this.loading.set(false)
  }

  async createBoard() {
    const { columns, ...board } = this.form.value
    if (!board) return

    const newBoard = await this.boardsStore.createBoard(board, columns)
    this.columnsStore.loadColumns(newBoard.id)

    this.closeModal()
  }

  async editBoard() {
    const activeBoard = this.activeBoard()
    if (!activeBoard) return

    const { columns, ...board } = this.form.value
    if (!board) return

    const updatedBoard = await this.boardsStore.updateBoard(activeBoard.id, board, columns)
    this.columnsStore.loadColumns(updatedBoard.id, true)

    this.closeModal()
  }

  closeModal() {
    this.dialogRef.close()
  }
}
