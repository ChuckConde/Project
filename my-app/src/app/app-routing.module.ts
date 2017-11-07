import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {SideboardingComponent } from './sideboarding/sideboarding.component';
import {ContactComponent } from './contact/contact.component';
import {ArticlesComponent } from './articles/articles.component';
import {ArticleComponent } from './article/article.component';
import {UserComponent } from './user/user.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { UsersummaryComponent } from './usersummary/usersummary.component';
import { RegisterUserComponent } from './register-user/register-user.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sideboarding', component: SideboardingComponent},
  {path: 'register-reactive', component: RegisterReactiveComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'user', component: UserComponent},
  {path: 'usersummary/:id', component: UsersummaryComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
