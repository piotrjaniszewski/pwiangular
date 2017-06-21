import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
