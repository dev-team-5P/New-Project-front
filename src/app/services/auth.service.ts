import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BaseUrl = environment.baseuri;

  constructor(private http: HttpClient, private router: Router) { }
/*******************************Register etablissement ********************* */
  Registeretab(data) {
    const url = `${this.BaseUrl}/Etablisement/register`;
    return this.http.post(url, data);
  }
  /*******************************Register canndidate ********************* */
  Register(data) {
    const url = `${this.BaseUrl}/Condidat/register`;
    return this.http.post(url, data);
  }
/*******************************Login********************* */
  signin(data) {
    const url = `${this.BaseUrl}/login`;

    return this.http.post(url, data);
  }
}
