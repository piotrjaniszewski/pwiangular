import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  flag:boolean;

  constructor() {
    if(localStorage.getItem('sessionToken')){
      this.flag=true;
    }
    else{
      this.flag = false;
    }
  }

  ngOnInit() {
  }

}
