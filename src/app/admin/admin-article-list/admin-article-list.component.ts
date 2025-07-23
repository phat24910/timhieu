import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../article';
import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.scss'],
})
export class AdminArticleListComponent implements OnInit {
  articles$!: Observable<Article[]>;
  constructor(private _api: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}
