import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { SignInComponent } from './sign-in-template-driven/sign-in.component';
import { SignInReactiveComponent } from './sign-in-reactive/sign-in-reactive.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   {
    path: 'article',
    loadChildren: () =>
      import('./article/article.module').then((m) => m.ArticleModule),
  },

    {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  // {
  //   path: '',
  //   redirectTo: 'article',
  //   pathMatch: 'full'
  // },

  {
    path: 'sign-in',
    component: SignInComponent
  },

  {
    path: 'sign-in-reactive',
    component: SignInReactiveComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
