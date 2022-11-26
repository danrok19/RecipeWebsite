import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoryProtoComponent } from './delete-category-proto.component';

describe('DeleteCategoryProtoComponent', () => {
  let component: DeleteCategoryProtoComponent;
  let fixture: ComponentFixture<DeleteCategoryProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCategoryProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCategoryProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
