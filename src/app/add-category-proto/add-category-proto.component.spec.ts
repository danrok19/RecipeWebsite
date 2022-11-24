import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryProtoComponent } from './add-category-proto.component';

describe('AddCategoryProtoComponent', () => {
  let component: AddCategoryProtoComponent;
  let fixture: ComponentFixture<AddCategoryProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoryProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
