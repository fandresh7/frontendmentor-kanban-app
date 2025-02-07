import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

import { ColumnsStore } from '@columns/store/columns.store'
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

  loading = signal<boolean>(false)

  columnsStore = inject(ColumnsStore)

  form = this.fb.group({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  closeModal() {
    this.dialogRef.close()
  }

  submit() {
    console.log('submit')
  }
}
