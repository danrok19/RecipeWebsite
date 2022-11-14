import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProtoComponent } from './login-proto.component';

describe('LoginProtoComponent', () => {
  let component: LoginProtoComponent;
  let fixture: ComponentFixture<LoginProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginProtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
