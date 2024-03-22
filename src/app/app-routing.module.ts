import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent  } from './components/pages/home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/pages/feed/feed.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userName', component: FeedComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'registrieren', component: UserRegistrationComponent },
  // Weitere Routen hier hinzufügen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


 }
