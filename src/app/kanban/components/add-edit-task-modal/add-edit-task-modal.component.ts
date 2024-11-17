import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { CloseIconComponent, plusIconComponent } from '../../../shared/components/icons.component'
import { DialogRef } from '@angular/cdk/dialog'

interface TaskForm {
  title: FormControl<string>
  description: FormControl<string>
  subtasks: FormArray<FormControl<string>>
  status: FormControl<string>
}

@Component({
  selector: 'add-edit-task-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CloseIconComponent, plusIconComponent],
  templateUrl: './add-edit-task-modal.component.html',
  styleUrl: './add-edit-task-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class AddEditTaskModalComponent {
  fb = inject(FormBuilder)
  dialogRef = inject(DialogRef<AddEditTaskModalComponent>)

  form = this.fb.group<TaskForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    subtasks: this.fb.array<FormControl<string>>([]),
    status: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  closeModal() {
    this.dialogRef.close()
  }
}
