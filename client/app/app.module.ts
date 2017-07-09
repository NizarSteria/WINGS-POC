import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './core/services/cat.service';
import { UserService } from './core/services/user.service';
import { AuthService } from './core/services/auth.service';
import { AuthGuardLogin } from './core/services/auth-guard-login.service';
import { AuthGuardAdmin } from './core/services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './component/cats/cats.component';
import { AboutComponent } from './component/about/about.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AccountComponent } from './component/account/account.component';
import { AdminComponent } from './component/admin/admin.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { FooterComponent } from "./core/layout/footer/footer.component";
import { HeaderComponent } from "./core/layout/header/header.component";

import { InputTextModule, ButtonModule }  from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    HomeComponent,
    UsersComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    RoutingModule,
    SharedModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
