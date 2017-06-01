import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components
import { OXComponent } from './OX/OX.component';  //import OX component
import { FbLoginComponent } from './fbLogin/fbLogin.component'; //import OX component

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fblogin', component: FbLoginComponent },
  { path: 'OX', component: OXComponent },
 // {path: '**', component: PageNotFoundComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
