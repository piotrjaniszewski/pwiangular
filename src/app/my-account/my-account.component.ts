import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private router: Router) {
    if (localStorage.getItem('sessionToken')) {
      this.router.navigate(['/editData']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {

  }
}
