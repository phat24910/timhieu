import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userInfo = {
    userName: '',
    password: '',
    rememberMe: false,
  };

  usernamePattern = /^[a-z]{6,32}$/i;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form);

    // if (this.userInfo.userName && this.userInfo.password) {
    //   this.router.navigate(['/article']);
    // } else {
    //   alert('Vui lòng nhập đầy đủ thông tin!');
    // }
  }
}
