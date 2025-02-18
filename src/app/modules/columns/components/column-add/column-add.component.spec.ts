import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ColumnAddComponent } from './column-add.component'

describe('ColumnAddComponent', () => {
  let component: ColumnAddComponent
  let fixture: ComponentFixture<ColumnAddComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnAddComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ColumnAddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
