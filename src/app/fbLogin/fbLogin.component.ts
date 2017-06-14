import {Component} from '@angular/core';
import {TranslateService} from "../translate/translate.service";

@Component({
    selector: 'app-fbLogin',
    templateUrl: `./fbLogin.component.html`
})
export class FbLoginComponent {
  zalogujSie:string;
  constructor(_translate:TranslateService) {
    this.zalogujSie=_translate.instant('Zaloguj sie!')
  };



};
