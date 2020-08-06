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
  connectedUser: any;
  socket: any;
  BaseUrl = environment.baseuri;

  constructor(private http: HttpClient, private router: Router) {
    this.connectedUser = this.getConnectedUser();
   }
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
  requestReset(body) {
    return this.http.post(`${this.BaseUrl}/login/req-reset-password`, body);
  }
  newPassword(body, token) {
    const tokenQuery = `?token=${token}`;
    return this.http.post(
      `${this.BaseUrl}/login/new-password${tokenQuery}`,
      body
    );
  }
  ValidPasswordToken(body, token) {
    const tokenQuery = `?token=${token}`;
    return this.http.post(
      `${this.BaseUrl}/login/valid-password-token${tokenQuery}`,
      body
    );
  }
  getListeUsers() {
    return this.http.get('http://localhost:3000/Condidat/getListeCandidat');
  }
  saveToken(token) {
    localStorage.setItem( 'token', token);
    this.connectedUser = this.getConnectedUser();
  }
  removeToken() {
    localStorage.deleteAll();
  }
  getConnectedUser() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      return jwt_decode(token).data;
    }
  }
  validToken() {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.connectedUser = {};
    return false;
  }
}
