import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: `./home.component.html`
})
export class HomeComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to home page"

    };
};
