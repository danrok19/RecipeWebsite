import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryProtoComponent } from './edit-category-proto.component';

describe('EditCategoryProtoComponent', () => {
  let component: EditCategoryProtoComponent;
  let fixture: ComponentFixture<EditCategoryProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoryProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCategoryProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
