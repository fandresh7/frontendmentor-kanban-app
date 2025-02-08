import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { BoardsStore } from '@boards/store/boards.store'

import { CloseIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'column-add-edit-modal',
  imports: [ReactiveFormsModule, CloseIconComponent],
  templateUrl: './column-add-edit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class ColumnAddEditModalComponent {
  fb = inject(FormBuilder)

  dialogRef = inject(DialogRef<ColumnAddEditModalComponent>)
  data = inject(DIALOG_DATA)

  boardsStore = inject(BoardsStore)
  activeBoard = computed(() => this.boardsStore.activeBoard())

  loading = signal<boolean>(false)

  form = this.fb.group({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

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

    await this.boardsStore.createColumn(activeBoard.id, this.form.value)
    this.closeModal()
  }

  async updateColumn() {
    console.log('updateColumn')
  }

  closeModal() {
    this.dialogRef.close()
  }
}
