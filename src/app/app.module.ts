import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProfilePhotoComponent } from './photo/profile-photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user/user-profile.component';
import { ProgressBarComponent } from './interaction/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ExampleContainerComponent } from './example-container/example-container.component';
import { DynamicContentOneComponent } from './dynamic-content-one/dynamic-content-one.component';
import { DynamicContentTwoComponent } from './dynamic-content-two/dynamic-content-two.component';
import { ToggleTwoWayComponent } from './toggle-two-way/toggle-two-way.component';
import { HighlightDirective } from './highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { FullAddressPipe } from './pipes/full-address.pipe';
import { AppTitlePipe } from './pipes/app-title.pipe';
import { IsAdultPipe } from './pipes/is-adult.pipe';
// import { ArticleListComponent } from './article/article-list/article-list.component';
// import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleModule } from './article/article.module';
import { SignInComponent } from './sign-in-template-driven/sign-in.component';
// import { ArticleEditComponent } from './article/article-edit/article-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SignInReactiveComponent } from './sign-in-reactive/sign-in-reactive.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './api.service';
import { ProductDiComponent } from './product-di/product-di.component';
import { ToggleDiComponent } from './toggle-di/toggle-di.component';
import { NameFormDiComponent } from './name-form-di/name-form-di.component';
import { CartService, CartExtService } from './DI';
import { BsTabGroupComponent } from './bs-tab-group/bs-tab-group.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './http/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProfilePhotoComponent,
    UserProfileComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ExampleContainerComponent,
    DynamicContentOneComponent,
    DynamicContentTwoComponent,
    ToggleTwoWayComponent,
    HighlightDirective,
    ReversePipe,
    FullAddressPipe,
    AppTitlePipe,
    IsAdultPipe,
    SignInComponent,
    SignInReactiveComponent,
    RegisterComponent,
    ProductDiComponent,
    ToggleDiComponent,
    NameFormDiComponent,
    BsTabGroupComponent,
    TabGroupComponent,
    TabPanelComponent,
  ],

    // ArticleEditComponent
    // ArticleListComponent,
    // ArticleDetailComponent,
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
  ],
  providers: [
    ApiService,
    {
      provide: CartService,
      useClass: CartService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
