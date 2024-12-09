import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { CloseIconComponent, plusIconComponent } from '@shared/components/icons.component'

@Component({
  selector: 'add-edit-column-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CloseIconComponent, plusIconComponent],
  templateUrl: './add-edit-column-modal.component.html',
  styleUrl: './add-edit-column-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class AddEditColumnModalComponent {
  fb = inject(FormBuilder)
  dialogRef = inject(DialogRef<AddEditColumnModalComponent>)

  form = this.fb.group({})

  closeModal() {
    this.dialogRef.close()
  }
}
