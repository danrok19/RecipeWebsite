import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealProtoComponent } from './meal-proto.component';

describe('MealProtoComponent', () => {
  let component: MealProtoComponent;
  let fixture: ComponentFixture<MealProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
