///<reference path="../../../typings/globals/fbsdk/index.d.ts" />
import {Component} from '@angular/core';
import {TranslateService} from "../translate/translate.service";

@Component({
    selector: 'app-fbLogin',
    templateUrl: `./fbLogin.component.html`
})
export class FbLoginComponent {
  infoString:string;
  constructor(private _translate:TranslateService) {
    this.init();
    this.infoString='bangladesz';
  };

  init() {
    FB.init({
    appId      : '791357664355674',
    xfbml      : true,
    version    : 'v2.9'
  });
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

  informacje() {
    document.getElementById('secretDiv').innerHTML = this._translate.instant('Zaloguj sie!');
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          FB.api('/me', 'get', {fields: 'first_name,last_name,name,id,gender'}, function(response) {
            document.getElementById('informacje').innerHTML = response.name+" "+response.id+" "+response.gender+" ";
          });
        }
        else{
          document.getElementById('informacje').innerHTML = document.getElementById('secretDiv').innerHTML
        }
      });
  }
};
