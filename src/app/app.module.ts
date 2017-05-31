import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { OXComponent } from './OX/OX.component'; //import OX component
import { FbLoginComponent } from './fbLogin/fbLogin.component'; //import fbLogin component
import { routing }  from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    FbLoginComponent,
    HomeComponent,
    OXComponent
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
