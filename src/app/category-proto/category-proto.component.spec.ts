import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProtoComponent } from './category-proto.component';

describe('CategoryProtoComponent', () => {
  let component: CategoryProtoComponent;
  let fixture: ComponentFixture<CategoryProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
