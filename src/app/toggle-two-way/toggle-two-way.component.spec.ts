import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTwoWayComponent } from './toggle-two-way.component';

describe('ToggleTwoWayComponent', () => {
  let component: ToggleTwoWayComponent;
  let fixture: ComponentFixture<ToggleTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleTwoWayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
