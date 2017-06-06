import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorFlag = false;
  successFlag = false;
  successMessage: string;
  errorMessage: string;

  constructor(private http: Http, private router: Router) {
    if (localStorage.getItem('sessionToken')) {
      this.router.navigate(['/editData']);
    }
  }

  onSubmit(value: any) {
    if (value.password === value.confirmPassword) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://pwinode.azurewebsites.net/user/register', JSON.stringify(value), {headers: headers}).toPromise().then(response => {
        if (response.status === 200) {
          this.showSuccess('Pomyślnie zarejestrowano użytkownika');
        } else {
          this.showError('Usługa chwilowo niedostępna. Spróbuj ponownie później.');
        }
      }).catch(response => {
        if (response.status === 403) {
          this.showError('Podany adres email jest już zajęty');
        } else {
          this.showError('Usługa chwilowo niedostępna. Spróbuj ponownie później.');
        }
      });
    } else {
      this.showError('Podane hasła są różne. ');
    }
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }
  hideErrorr() {
    this.errorFlag = false;
  }

  hideSuccess() {
    this.successFlag = false;
  }

  showError(message: string) {
    this.errorMessage = message;
    this.errorFlag = true;
  }

  showSuccess(message: string) {
    this.successMessage = message;
    this.successFlag = true;
  }
}
