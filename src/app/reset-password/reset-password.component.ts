import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {TranslateService} from "../translate/translate.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  errorFlag = false;
  successFlag = false;
  successMessage: string;
  errorMessage: string;
  loading: boolean;

  constructor(private http: Http, private router: Router,private _translate: TranslateService) {
    if (localStorage.getItem('sessionToken')) {
      this.router.navigate(['/editData']);
    }
    this.loading = false;
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    this.loading=true;
    if (value.password === value.confirmPassword) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://pwinode.azurewebsites.net/user/resetPassword', JSON.stringify(value), {headers: headers}).toPromise().then(response => {
        if (response.status === 200) {
          this.showSuccess('Pomyslnie zmieniono haslo.');
          this.loading = false;

        } else {
          this.showError('Usluga chwilowo niedostepna, sprobuj ponownie pozniej.');
          this.loading = false;

        }
      }).catch(response => {
        if (response.status === 402) {
          this.showError('Podano bledne dane.');
          this.loading = false;

        } else {
          this.showError('Usluga chwilowo niedostepna, sprobuj ponownie pozniej.');
          this.loading = false;

        }
      });
    } else {
      this.showError('Podane hasla sa rozne.');
      this.loading = false;
    }
    window.scrollTo(0, 0);
  }

  hideErrorr() {
    this.errorFlag = false;
  }

  hideSuccess() {
    this.successFlag = false;
  }

  showError(message: string) {
    this.errorMessage = this._translate.instant(message);
    this.errorFlag = true;
  }

  showSuccess(message: string) {
    this.successMessage = this._translate.instant(message);
    this.successFlag = true;
  }
}
