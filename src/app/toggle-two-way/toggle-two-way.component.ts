import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-two-way',
  templateUrl: './toggle-two-way.component.html',
  styleUrls: ['./toggle-two-way.component.css']
})
export class ToggleTwoWayComponent {
   @Input() checked = false;
   @Output() checkedChange = new EventEmitter<boolean>();

   constructor() {}

   ngOnInit() {}

   toggle() {
     this.checked = !this.checked;
     this.checkedChange.emit(this.checked);
   }
}


