import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BoardAddEditModalComponent } from './board-add-edit-modal.component'

describe('BoardAddEditModalComponent', () => {
  let component: BoardAddEditModalComponent
  let fixture: ComponentFixture<BoardAddEditModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardAddEditModalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(BoardAddEditModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
