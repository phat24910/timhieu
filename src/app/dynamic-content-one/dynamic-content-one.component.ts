import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-content-one',
  templateUrl: './dynamic-content-one.component.html',
  styleUrl: './dynamic-content-one.component.css'
})
export class DynamicContentOneComponent {

}


// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-dynamic-content-one',
//   template: `
//     <h1>DYNAMIC CONTENT 1</h1>
//     <p>++++++{{data}}+++++++++</p>
//   `
// })
// export class DynamicContentOneComponent {
//   @Input() data!: string;
// }
