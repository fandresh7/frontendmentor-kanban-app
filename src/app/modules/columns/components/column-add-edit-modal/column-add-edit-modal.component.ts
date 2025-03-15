import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { BoardsStore } from '@boards/store/boards.store'
import { ColumnsStore } from '@columns/store/columns.store'
import { Column } from '@core/models/column.model'

import { CloseIconComponent } from '@shared/components/icons/icons.component'

interface EditColumnData {
  type: 'new' | 'edit'
  column?: Column
}

@Component({
  selector: 'column-add-edit-modal',
  imports: [ReactiveFormsModule, CloseIconComponent],
  templateUrl: './column-add-edit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class ColumnAddEditModalComponent implements OnInit {
  fb = inject(FormBuilder)

  dialogRef = inject(DialogRef<ColumnAddEditModalComponent>)
  data = inject<EditColumnData>(DIALOG_DATA)

  columnsStore = inject(ColumnsStore)
  boardsStore = inject(BoardsStore)
  activeBoard = computed(() => this.boardsStore.activeBoard())

  loading = signal<boolean>(false)

  form = this.fb.group({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.controls.name.setValue(this.data.column!.name)
    }
  }

  async submit() {
    if (this.form.invalid) return

    this.loading.set(true)

    if (this.data.type === 'new') {
      await this.createColumn()
    } else {
      await this.updateColumn()
    }

    this.loading.set(false)
  }

  async createColumn() {
    const activeBoard = this.activeBoard()
    if (!activeBoard) return

    await this.columnsStore.createColumn(activeBoard.id, this.form.value)

    this.closeModal()
  }

  async updateColumn() {
    const activeBoard = this.activeBoard()
    if (!activeBoard) return

    const data = { ...this.form.value, boardId: activeBoard.id }
    await this.columnsStore.updateColumn(this.data.column!.id, data)

    this.closeModal()
  }

  closeModal() {
    this.dialogRef.close()
  }
}
