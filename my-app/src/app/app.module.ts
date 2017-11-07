import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { SideboardingComponent } from './sideboarding/sideboarding.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article.service';
import { CommentsService } from './comments.service';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { UsersummaryComponent } from './usersummary/usersummary.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SideboardingComponent,
    ContactComponent,
    ArticlesComponent,
    ArticleComponent,
    UserComponent,
    UsersummaryComponent,
    RegisterReactiveComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    NgxPaginationModule
  ],
  providers: [
    ArticleService,
    CommentsService,
    UserService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
