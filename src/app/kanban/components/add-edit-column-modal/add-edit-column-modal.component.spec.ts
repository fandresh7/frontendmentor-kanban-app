import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditColumnModalComponent } from './add-edit-column-modal.component';

describe('AddEditColumnModalComponent', () => {
  let component: AddEditColumnModalComponent;
  let fixture: ComponentFixture<AddEditColumnModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditColumnModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditColumnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
