import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-content-two',
  templateUrl: './dynamic-content-two.component.html',
  styleUrl: './dynamic-content-two.component.css'
})
export class DynamicContentTwoComponent {

}

// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-dynamic-content-two',
//   template: `
//     <h1>DYNAMIC CONTENT 2</h1>
//     <p>++++++{{data}}+++++++++</p>
//   `
// })
// export class DynamicContentTwoComponent {
//   @Input() data!: string;
// }
