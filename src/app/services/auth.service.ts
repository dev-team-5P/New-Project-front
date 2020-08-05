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
  /*******************************Register Admin ********************* */
  Registeradm(data) {
    const url = `${this.BaseUrl}/superadmin/register`;
    return this.http.post(url, data);
  }
/*******************************Register etablissement ********************* */
  Registeretab(data) {
    const url = `${this.BaseUrl}/Etablisement/register`;
    return this.http.post(url, data);
  }

  upload(data, id) {
    const url = `${this.BaseUrl}/uploadimg/${id}`;
    return this.http.put(url, data);
  }
  /*******************************Register canndidate ********************* */
  Register(j, data) {
    const url = `${this.BaseUrl}/Condidat/${j}/register`;
    return this.http.post(url, data);
  }
  getetab() {
    const url = `${this.BaseUrl}/Condidat/etablisement`;
    return this.http.get(url);
  }
/*******************************Login********************* */
  signin(data) {
    const url = `${this.BaseUrl}/login`;

    return this.http.post(url, data);
  }
}
