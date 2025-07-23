import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameFormDiComponent } from './name-form-di.component';

describe('NameFormDiComponent', () => {
  let component: NameFormDiComponent;
  let fixture: ComponentFixture<NameFormDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameFormDiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameFormDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
