import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {TranslateService} from "../translate/translate.service";

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  errorFlag = false;
  successFlag = false;
  successMessage: string;
  errorMessage: string;
  loading:boolean;

  firstName= '';
  lastName= '';
  country= '';

  constructor(private http: Http, private router: Router, private _translate: TranslateService) {
    if (!localStorage.getItem('sessionToken')) {
      this.router.navigate(['/login']);

    } else {
      this.loading = false;
      this.getInfo();
    }
  }

  getInfo() {
    this.loading = true;
    const requestObject = {
      userId: localStorage.getItem('userId'),
      sessionToken: localStorage.getItem('sessionToken')
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://pwinode.azurewebsites.net/user/info', JSON.stringify(requestObject), {headers: headers}).toPromise().then(response => {
      if (response.status === 200) {

        this.firstName = response.json().firstName;
        this.lastName = response.json().lastName;
        this.country = response.json().country;

      } else {
        this.showError('Usluga chwilowo niedostepna, sprobuj ponownie pozniej.');
      }
    }).catch(response => {
      this.showError('Usluga chwilowo niedostepna, sprobuj ponownie pozniej.');
    });
    this.loading=false;
  }

  onSubmit(value: any) {
    this.loading= true;
      const requestObject = {
        country: value.country,
        firstName: value.firstName,
        lastName: value.lastName,
        sessionToken: localStorage.getItem('sessionToken'),
        userId: localStorage.getItem('userId')
      };
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://pwinode.azurewebsites.net/user/edit', JSON.stringify(requestObject), {headers: headers}).toPromise().then(response => {
        if (response.status === 200) {

          this.firstName = response.json().firstName;
          this.lastName = response.json().lastName;
          this.country = response.json().country;
          this.showSuccess('Edycja zakonczona powodzeniem');
          this.loading= false;
        } else {
          this.showError('Usluga chwilowo niedostepna, sprobuj ponownie pozniej.');
        }
      }).catch(response => {
        this.showError('Usluga chwilowo niedostepna, sprobuj ponownie pozniej.');
        this.loading= false;
      });
      window.scrollTo(0, 0);
  }

  wyloguj() {
    this.loading= true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const requestObject = {
      sessionToken: localStorage.getItem('sessionToken'),
      userId: localStorage.getItem('userId')
    };
    this.http.post('http://pwinode.azurewebsites.net/user/logout', JSON.stringify(requestObject), {headers: headers}).toPromise().then(response => {
      if (response.status === 200) {
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('userId');
        this.router.navigate(['/login']);
        this.loading= false;
      } else {
        this.showError('Usluga chwilowo niedostepna, sprobuj ponownie pozniej.');
      }
    }).catch(response => {
      this.loading= false;
      this.showError('Usluga chwilowo niedostepna, sprobuj ponownie pozniej.');
    });
    window.scrollTo(0, 0);
  }

  ngOnInit() { }

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
