import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TaskAddEditModalComponent } from './task-add-edit-modal.component'

describe('TaskAddEditModalComponent', () => {
  let component: TaskAddEditModalComponent
  let fixture: ComponentFixture<TaskAddEditModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAddEditModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TaskAddEditModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
