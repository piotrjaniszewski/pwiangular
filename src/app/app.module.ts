import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // import home components
import { OXComponent } from './OX/OX.component'; // import OX component
import { FbLoginComponent } from './fbLogin/fbLogin.component'; // import fbLogin component
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EditDataComponent } from './edit-data/edit-data.component';


@NgModule({
  declarations: [
    AppComponent,
    FbLoginComponent,
    HomeComponent,
    OXComponent,
    LoginComponent,
    MyAccountComponent,
    RegisterComponent,
    ResetPasswordComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
