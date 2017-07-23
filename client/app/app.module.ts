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

import { InputTextModule, ButtonModule, TreeModule, TreeNode } from 'primeng/primeng';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductService } from "./core/services/products/product.service";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './store/reducers';
import { CartStore } from './store/cart.store';

export const SERVICES = [
  AuthService,
  AuthGuardLogin,
  AuthGuardAdmin,
  CatService,
  UserService,
  ProductService
]
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
    ProductComponent,
    CartComponent,
    ProductDetailComponent,
  ],
  imports: [
    SharedModule,
    InputTextModule,
    ButtonModule,
    TreeModule,
    RoutingModule,
    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    // EffectsModule.run(BookEffects),
    // EffectsModule.run(CollectionEffects),

  ],
  // If service is specified in app.module (this file), then all components have access to the SAME instance of that service 
  // This is useful when exactly one object is needed to coordinate actions across the system.
  // This is an example of the singleton pattern (Design pattern that restricts the instantiation of a class to one object) 

  providers: [
    SERVICES, CartStore
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
