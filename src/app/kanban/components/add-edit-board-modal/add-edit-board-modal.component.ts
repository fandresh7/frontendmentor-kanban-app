import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CloseIconComponent, plusIconComponent } from '../../../shared/components/icons.component'
import { DialogRef } from '@angular/cdk/dialog'
import { FormControl, FormArray, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'
import { AddEditTaskModalComponent } from '../add-edit-task-modal/add-edit-task-modal.component'

interface BoardForm {
  name: FormControl<string>
  columns: FormArray<FormControl<string>>
}

@Component({
  selector: 'add-edit-board-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CloseIconComponent, plusIconComponent],
  templateUrl: './add-edit-board-modal.component.html',
  styleUrl: './add-edit-board-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class AddEditBoardModalComponent {
  fb = inject(FormBuilder)
  dialogRef = inject(DialogRef<AddEditTaskModalComponent>)

  form = this.fb.group<BoardForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    columns: this.fb.array<FormControl<string>>([])
  })

  closeModal() {
    this.dialogRef.close()
  }
}
