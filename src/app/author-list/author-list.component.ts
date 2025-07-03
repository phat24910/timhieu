import { Component, Input, Output, EventEmitter } from '@angular/core';
import { authors, Author } from '../author';

@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelected($event)"
      (delete)="onDelete($event)"
    ></app-author-detail>
    <br>
    <div>
      current selected author:{{ currentAuthor?.firstName }}
      {{ currentAuthor?.lastName }}
    </div>
  `

})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  onDelete(authorId: number) {
    this.authors = this.authors.filter(author => {return author.id !== authorId;});
    if (this.currentAuthor?.id === authorId) {
      this.currentAuthor = this.authors[0];
    }
}
}
