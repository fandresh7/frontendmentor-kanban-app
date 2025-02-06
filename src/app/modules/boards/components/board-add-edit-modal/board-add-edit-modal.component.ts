import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core'
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { BoardsStore } from '@boards/store/boards.store'
import { ColumnsStore } from '@columns/store/columns.store'
import { CloseIconComponent, plusIconComponent } from '@shared/components/icons/icons.component'
import { TaskAddEditModalComponent } from '@tasks/components/task-add-edit-modal/task-add-edit-modal.component'

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

  boardsStore = inject(BoardsStore)
  columnsStore = inject(ColumnsStore)

  activeBoard = computed(() => this.boardsStore.activeBoard())
  currentColumns = computed(() => this.columnsStore.columns())

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
      this.currentColumns().forEach(column => this.addNewColumnField(column.name))
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

    this.loading.set(true)
  }

  async createBoard() {
    const { columns, ...board } = this.form.value
    if (!board) return

    const newBoard = await this.boardsStore.createBoard(board, columns)

    this.columnsStore.loadColumns(newBoard.id, true)
    this.dialogRef.close()
  }

  async editBoard() {
    const activeBoard = this.activeBoard()
    if (!activeBoard) return

    const { columns, ...board } = this.form.value
    if (!board) return

    await this.boardsStore.updateBoard(activeBoard.id, board, columns)

    this.columnsStore.loadColumns(activeBoard.id, true)
    this.dialogRef.close()
  }

  closeModal() {
    this.dialogRef.close()
  }
}
