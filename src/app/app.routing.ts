import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // import home components
import { OXComponent } from './OX/OX.component';  // import OX component
import { FbLoginComponent } from './fbLogin/fbLogin.component';
import { MyAccountComponent } from './my-account/my-account.component'; // import OX component
import { LoginComponent } from './login/login.component'; // import OX component
import { RegisterComponent } from './register/register.component'; // import OX component
import { EditDataComponent } from './edit-data/edit-data.component'; // import OX component
import { ResetPasswordComponent } from './reset-password/reset-password.component'; // import OX component

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fblogin', component: FbLoginComponent },
  { path: 'OX', component: OXComponent },
  { path: 'myAccount', component: MyAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'editData', component: EditDataComponent},

  {path: '**', component: HomeComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
