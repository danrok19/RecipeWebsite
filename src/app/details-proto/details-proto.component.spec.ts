import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProtoComponent } from './details-proto.component';

describe('DetailsProtoComponent', () => {
  let component: DetailsProtoComponent;
  let fixture: ComponentFixture<DetailsProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
