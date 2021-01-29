import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {
    path: 'home', component: LandingPageComponent,
  },
  {
    path: 'signin', component: SigninComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
