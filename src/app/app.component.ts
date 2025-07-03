import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular-classic';

   name = 'Angular';
   show = false;
   currentProgress = 30;

  //data binding
  //event binding

  user={
    name: 'John Doe',
    age: 30,
  }

  handler(event: any){
    console.log('click', event);
  }

  message = '';
  handlerCompleted() {
    this.message = 'Progress đã đạt 100%';
  }

}
