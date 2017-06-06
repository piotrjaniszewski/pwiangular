import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorFlag = false;
  successFlag = false;
  successMessage: string;
  errorMessage: string;
  loading = false;
  constructor(private http: Http, private router: Router) {
    window.scrollTo(0, 0); // TODO dać to wszędzie żeby sam scrollowało
    if (localStorage.getItem('sessionToken')) {
      this.router.navigate(['/editData']);
    }
  }

  ngOnInit() { }

  onSubmit(value: any) {
    this.loading = true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(JSON.stringify(value));
    this.http.post('http://pwinode.azurewebsites.net/user/login', JSON.stringify(value), {headers: headers}).toPromise().then(response => {
      if (response.status === 200) {
        localStorage.setItem('userId', response.json().userId);
        localStorage.setItem('sessionToken', response.json().sessionToken);
        this.router.navigate(['/editData']);
      } else {
        this.showError('Usługa chwilowo niedostępna, spróbuj ponownie później');
      }
      console.log(response.json());
    }).catch(response => {
      this.showError(' ' + response.status);
        if (response.status === 403) {
          this.showError('Błędny email lub hasło');
        } else {
          this.showError('Usługa chwilowo niedostępna, spróbuj ponownie później');
        }
    });
    this.loading = false;
  }
// calkowicienowehaslo

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
