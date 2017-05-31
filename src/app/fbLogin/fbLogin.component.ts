import {Component} from '@angular/core';

@Component({
    selector: 'app-fbLogin',
    templateUrl: `app/fbLogin/fbLogin.component.html`
})
export class FbLoginComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to OX page"
    };
};