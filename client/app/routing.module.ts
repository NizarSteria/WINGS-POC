import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatsComponent } from './component/cats/cats.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AccountComponent } from './component/account/account.component';
import { AdminComponent } from './component/admin/admin.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

import { AuthGuardLogin } from './core/services/auth-guard-login.service';
import { AuthGuardAdmin } from './core/services/auth-guard-admin.service';
import { UsersComponent } from "./component/users/users.component";
import { CartComponent } from "./component/cart/cart.component";
import { ProductComponent } from "./component/product/product.component";
import { ProductDetailComponent } from "./component/product-detail/product-detail.component";

const routes: Routes = [
  { path: 'home', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
