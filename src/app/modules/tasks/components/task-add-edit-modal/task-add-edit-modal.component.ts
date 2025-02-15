import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core'
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { ColumnsStore } from '@columns/store/columns.store'
import { Task } from '@core/models/task.model'
import { CloseIconComponent, plusIconComponent } from '@shared/components/icons/icons.component'
import { TaskStore } from '@tasks/store/task.store'

@Component({
  selector: 'task-add-edit-modal',
  imports: [ReactiveFormsModule, CloseIconComponent, plusIconComponent],
  templateUrl: './task-add-edit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class TaskAddEditModalComponent implements OnInit {
  fb = inject(FormBuilder)

  data = inject(DIALOG_DATA)
  dialogRef = inject(DialogRef<TaskAddEditModalComponent>)

  columnsStore = inject(ColumnsStore)
  columns = computed(() => this.columnsStore.columns())

  tasksStore = inject(TaskStore)

  loading = signal<boolean>(false)

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    columnId: ['', Validators.required],
    subtasks: this.fb.array<FormControl<string>>([])
  })

  get subtasks() {
    return this.form.get('subtasks') as FormArray
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      const task = this.data.task as Task

      this.form.patchValue({
        title: task.title,
        description: task.description,
        columnId: task.columnId
      })

      task.subtasks?.forEach(subtask => {
        this.addNewSubtaskField(subtask.title)
      })
    }
  }

  addNewSubtaskField(value?: string) {
    this.subtasks.push(new FormControl(value ?? '', { nonNullable: true, validators: [Validators.required] }))
  }

  removeSubtaskField(index: number) {
    if (this.subtasks.length > 1) this.subtasks.removeAt(index)
  }

  async submit() {
    if (this.form.invalid) return

    this.loading.set(true)

    if (this.data.type === 'new') {
      await this.createTask()
    } else {
      await this.editTask()
    }

    this.loading.set(false)
  }

  async createTask() {
    const properties = this.form.value as Partial<Task>

    const newTask = await this.tasksStore.createTask(properties)
    this.tasksStore.loadTasks(newTask.columnId, true)

    this.closeModal()
  }

  async editTask() {
    const properties = this.form.value as Partial<Task>
    const id = this.data.task.id

    const updateTask = await this.tasksStore.updateTask(id, properties)
    this.tasksStore.loadTasks(updateTask.columnId, true)

    this.closeModal()
  }

  closeModal() {
    this.dialogRef.close()
  }
}
