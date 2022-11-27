import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMealProtoComponent } from './edit-meal-proto.component';

describe('EditMealProtoComponent', () => {
  let component: EditMealProtoComponent;
  let fixture: ComponentFixture<EditMealProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMealProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMealProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
