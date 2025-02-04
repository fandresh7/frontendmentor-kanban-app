import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ColumnAddEditModalComponent } from './column-add-edit-modal.component'

describe('ColumnAddEditModalComponent', () => {
  let component: ColumnAddEditModalComponent
  let fixture: ComponentFixture<ColumnAddEditModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnAddEditModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ColumnAddEditModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
