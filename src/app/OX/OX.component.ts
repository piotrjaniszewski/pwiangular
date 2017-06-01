import {Component} from '@angular/core';

@Component({
    selector: 'app-ox',
    templateUrl: `./OX.component.html`
})
export class OXComponent {
    welcome: string;
    constructor(){
        this.welcome = "Welcome to OX page"
    };
};
