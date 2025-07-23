import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInReactiveComponent } from './sign-in-reactive.component';

describe('SignInReactiveComponent', () => {
  let component: SignInReactiveComponent;
  let fixture: ComponentFixture<SignInReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
