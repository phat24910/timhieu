import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDiComponent } from './toggle-di.component';

describe('ToggleDiComponent', () => {
  let component: ToggleDiComponent;
  let fixture: ComponentFixture<ToggleDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleDiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
