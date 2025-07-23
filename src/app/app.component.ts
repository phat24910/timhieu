// import { Component } from '@angular/core';
// import { authors } from './author';
// import { interval } from 'rxjs';
// import { state } from '@angular/animations';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'hello-angular-classic';

//   //  name = 'Angular user';
//    show = false;
//    currentProgress = 30;

//   //data binding
//   //event binding

//   user={
//     name: 'John Doe',
//     age: 30,
//   }

//   isChecked = true;

//   isDanger = false;
//   isWarning = false;

//   color= 'blue';

//   name = 'angular vietnam';
//   today = new Date();
//   money = 1234567;
//   percent = 0.75;


//   interval$ = interval(1000);

//   addr = {
//     street: '123 Main St',
//     city: 'Hanoi',
//     state: 'Hanoi',
//     zip: '100000',
//     country: 'Vietnam'
//   };
//   // ngOnInit() {
//   //   this.interval$.subscribe(val => {
//   //     this.time = val;
//   //   });
//   // }

//   authors= authors;
//   handler(event: any){
//     console.log('click', event);
//   }

//   message = '';
//   handlerCompleted() {
//     this.message = 'Progress đã đạt 100%';
//   }
// }



import { Component, OnInit } from '@angular/core';
import { authors } from './author';
import { interval, Observable, timer } from 'rxjs';
import { map, startWith, finalize, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-angular-classic';

  show = false;
  currentProgress = 30;

  user = {
    name: 'John Doe',
    age: 30,
  };

  isChecked = true;
  isDanger = false;
  isWarning = false;
  color = 'blue';

  // name = 'angular vietnam';
  today = new Date();
  money = 1234567;
  percent = 0.75;

  interval$ = interval(1000);

  addr = {
    street: '123 Main St',
    city: 'Hanoi',
    state: 'Hanoi',
    zip: '100000',
    country: 'Vietnam'
  };

  authors = authors;
  handler(event: any) {
    console.log('click', event);
  }

  message = '';
  handlerCompleted() {
    this.message = 'Progress đã đạt 100%';
  }

  userIdChangeAfterFiveSeconds = '14324';
  time$: Observable<number> | undefined;

  users: { name: string, age: number }[] = [
    { name: 'Tiep Phan', age: 30 },
    { name: 'Trung Vo', age: 13 },
    { name: 'Chau Tran', age: 29 },
    { name: 'Tuan Anh', age: 16 }
  ];
  newUser = { name: '', age: 0 };

  ngOnInit(): void {
    this.time$ = timer(0, 1000).pipe(
      map((val) => 5 - (val + 1)),
      startWith(5),
      finalize(() => {
        this.userIdChangeAfterFiveSeconds = '';
      }),
      takeWhile((val) => val >= 0)
    );
  }

  addUserByUpdateReference() {
    this.users = [...this.users, this.newUser];
    this.newUser = { name: '', age: 0 };
  }

  name='John Doe';
  question = {
    question1: true,
    question2: false,
  }

  showTab = true;

}
