import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { ProfilePhotoComponent } from './photo/profile-photo.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user/user-profile.component';
import { ProgressBarComponent } from './interaction/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ExampleContainerComponent } from './example-container/example-container.component';
import { DynamicContentOneComponent } from './dynamic-content-one/dynamic-content-one.component';
import { DynamicContentTwoComponent } from './dynamic-content-two/dynamic-content-two.component';

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
    DynamicContentTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
