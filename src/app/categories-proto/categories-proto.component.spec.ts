import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesProtoComponent } from './categories-proto.component';

describe('CategoriesProtoComponent', () => {
  let component: CategoriesProtoComponent;
  let fixture: ComponentFixture<CategoriesProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
