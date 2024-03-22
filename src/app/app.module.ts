import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserloginComponent } from './user/user-login/userlogin.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';
import { FeedComponent } from './components/pages/feed/feed.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UploadProfilePictureComponent } from './user/user-profile/upload-profile-picture/upload-profile-picture.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    UserRegistrationComponent,
    HomeComponent,
    FeedComponent,
    UserProfileComponent,
    UploadProfilePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
