import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { ArticleService } from './article.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanEditArticleGuard implements
CanActivate {
  constructor(
    private userService: UserService,
    private articleService: ArticleService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | UrlTree {
    const slug = next.paramMap.get('slug');
    if (!slug) {
      return this.router.parseUrl('/');
    }

    return this.articleService.getArticleBySlug(slug).pipe(
      map(article => article.author === this.userService.currentUser.username)
    );
  }
}
