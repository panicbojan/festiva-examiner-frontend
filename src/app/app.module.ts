import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FestformaComponent } from './dashboard/festforma/festforma.component';
import { FestlistaComponent } from './dashboard/festlista/festlista.component'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { CategoryComponent } from './category/category.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthGuard } from './auth.guard';
import { Observable } from 'rxjs';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    FestformaComponent,
    FestlistaComponent,
    UpdateComponent,
    CategoryComponent,
    CommentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'update/:festival_id',
        component:UpdateComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'category',
        component:CategoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'comments',
        component:CommentsComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [HttpClient, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
