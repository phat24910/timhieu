// import { Component, Input, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-user-profile',
//   template: `
//     <div>
//       <h3>User Profile</h3>
//       <p>Name: {{ name }}</p>
//     </div>
//   `
// })
// export class UserProfileComponent {
//   @Input() name = '';

//   ngOnChanges(changes: SimpleChanges) {
//     for (const inputName in changes) {
//       const inputValues = changes[inputName];
//       console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
//       console.log(`Current ${inputName} == ${inputValues.currentValue}`);
//       console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
//     }
//   }
// }

import { Component, inject, DestroyRef } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <div>
      <h3>User Profile</h3>
      <p>Component dang nhap va huy</p>
    </div>
  `
})
export class UserProfileComponent {
  constructor() {
    inject(DestroyRef).onDestroy(() => {
      console.log('UserProfile destruction');
    });
  }
}


// import { Component, inject, ElementRef, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-user-profile',
//   template: `
//     <div>
//       <h3>User Profile</h3>
//       <p>Element height: {{ elementHeight }}</p>
//     </div>
//   `
// })
// export class UserProfileComponent implements AfterViewInit {
//   private prevPadding = 0;
//   elementHeight = 0;

//   constructor(private elementRef: ElementRef) {}

//   ngAfterViewInit() {
//     const nativeElement = this.elementRef.nativeElement.querySelector('div');
//     const padding = this.computePadding();
//     nativeElement.style.padding = padding + 'px';
//     this.prevPadding = padding;
//     this.elementHeight = nativeElement.getBoundingClientRect().height;
//   }

//   private computePadding(): number {
//     return Math.floor(Math.random() * 50) + 10;
//   }
// }
