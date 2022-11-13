import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealProtoComponent } from './add-meal-proto.component';

describe('AddMealProtoComponent', () => {
  let component: AddMealProtoComponent;
  let fixture: ComponentFixture<AddMealProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMealProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMealProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
