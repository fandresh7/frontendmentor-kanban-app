import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AddNewColumnComponent } from './add-new-column.component'

describe('AddNewColumnComponent', () => {
  let component: AddNewColumnComponent
  let fixture: ComponentFixture<AddNewColumnComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewColumnComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AddNewColumnComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
