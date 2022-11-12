import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsProtoComponent } from './meals-proto.component';

describe('MealsProtoComponent', () => {
  let component: MealsProtoComponent;
  let fixture: ComponentFixture<MealsProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
