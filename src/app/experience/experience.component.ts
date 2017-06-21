import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

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
