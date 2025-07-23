import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-name-form-di',
  templateUrl: './name-form-di.component.html',
  styleUrls: ['./name-form-di.component.css']
})
export class NameFormDiComponent implements OnInit {
  model = {
    name: 'John Doe'
  };

  @ViewChild('nameForm', {
    read: ElementRef,
    static: true
  }) form!: ElementRef<HTMLFormElement>;
  constructor() { }

  ngOnInit(): void {
    console.log(this.form);
  }
}
