import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMealProtoComponent } from './delete-meal-proto.component';

describe('DeleteMealProtoComponent', () => {
  let component: DeleteMealProtoComponent;
  let fixture: ComponentFixture<DeleteMealProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMealProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMealProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
