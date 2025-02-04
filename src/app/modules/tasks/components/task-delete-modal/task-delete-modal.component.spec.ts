import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TaskDeleteModalComponent } from './task-delete-modal.component'

describe('TaskDeleteModalComponent', () => {
  let component: TaskDeleteModalComponent
  let fixture: ComponentFixture<TaskDeleteModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDeleteModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TaskDeleteModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
