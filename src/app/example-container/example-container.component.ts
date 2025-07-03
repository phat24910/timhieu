import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicContentOneComponent } from '../dynamic-content-one/dynamic-content-one.component';
import { DynamicContentTwoComponent } from '../dynamic-content-two/dynamic-content-two.component';

@Component({
  selector: 'app-example-container',
  templateUrl: './example-container.component.html'
})
export class ExampleContainerComponent {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: true })
  containerRef!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  showDynamicCompOne() {
    this.containerRef.clear();
    const factory = this.cfr.resolveComponentFactory(DynamicContentOneComponent);
    this.containerRef.createComponent(factory);
  }

  showDynamicCompTwo() {
    this.containerRef.clear();
    const factory = this.cfr.resolveComponentFactory(DynamicContentTwoComponent);
    this.containerRef.createComponent(factory);
  }
   clearDynamicComp() {
    this.containerRef.clear();
  }
}


// import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

// @Component({
//   selector: 'app-example-container',
//   templateUrl: './example-container.component.html',
//   styleUrls: ['./example-container.component.scss']
// })
// export class ExampleContainerComponent {
//   @ViewChild('dynamicComponent', { read: ViewContainerRef, static: true })
//   containerRef!: ViewContainerRef;

//   constructor(private cfr: ComponentFactoryResolver) {}

//   async addDynamicCompOne() {
//     this.containerRef.clear();
//     const { DynamicContentOneComponent } = await import('../dynamic-content-one/dynamic-content-one.component');
//     const factory = this.cfr.resolveComponentFactory(DynamicContentOneComponent);
//     const componentRef = this.containerRef.createComponent(factory);
//     componentRef.instance.data = "INPUT DATA 1";
//   }

//   async addDynamicCompTwo() {
//     this.containerRef.clear();
//     const { DynamicContentTwoComponent } = await import('../dynamic-content-two/dynamic-content-two.component');
//     const factory = this.cfr.resolveComponentFactory(DynamicContentTwoComponent);
//     const componentRef = this.containerRef.createComponent(factory);
//     componentRef.instance.data = "INPUT DATA 2";
//   }

  // clearDynamicComp() {
  //   this.containerRef.clear();
  // }
// }
