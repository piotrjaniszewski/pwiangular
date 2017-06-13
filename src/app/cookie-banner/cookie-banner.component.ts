import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit {

  flag:boolean;
  constructor() {
    if(localStorage.getItem('cookies')==='accepted'){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }

  ngOnInit() {

  }

  changeFlag(){
    localStorage.setItem('cookies','accepted');
    this.flag=false;
  }
}
