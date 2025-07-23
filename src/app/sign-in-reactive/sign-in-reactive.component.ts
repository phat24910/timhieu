import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import { Observable, of } from "rxjs";
import { NoWhitespaceValidator } from "../validators/no-whitespace.validator";

@Component({
  selector: "app-sign-in-reactive",
  templateUrl: "./sign-in-reactive.component.html",
  styleUrls: ["./sign-in-reactive.component.css"]
})
export class SignInReactiveComponent implements OnInit {
  // signInForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   rememberMe: new FormControl(false),
  // });

  signInForm! : FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: [
        "",
        Validators.compose([
          //Validators.required,
          NoWhitespaceValidator(),
          Validators.minLength(6),
          //Validators.pattern(/^[a-z]{6,32}$/i)
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/)
        ])
      ],
      rememberMe: false
    });

    new FormControl("", Validators.required, this.isUserNameDuplicated);
  }
  onSubmit(): void {
    console.log(this.signInForm);
  }

  isUserNameDuplicated(control: AbstractControl): Observable<ValidationErrors| null> {
    return of(null);
  }
}
