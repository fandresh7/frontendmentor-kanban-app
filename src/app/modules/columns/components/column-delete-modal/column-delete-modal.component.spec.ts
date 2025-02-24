import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ColumnDeleteModalComponent } from './column-delete-modal.component'

describe('ColumnDeleteModalComponent', () => {
  let component: ColumnDeleteModalComponent
  let fixture: ComponentFixture<ColumnDeleteModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnDeleteModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ColumnDeleteModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
