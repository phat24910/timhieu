import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-author-detail',
  template: `
    <div>
    {{author?.firstName}} {{author?.lastName}}
    <button style="margin-left: 1rem;" (click)="select.emit(author)">Select</button>
    <button style="margin-left: 1rem;" (click)="delete.emit(author?.id)">x</button>
   </div>
  `
})
export class AuthorDetailComponent {
  @Input() author?: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
