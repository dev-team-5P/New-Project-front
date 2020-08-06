import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  BaseUrl = environment.baseuri;
  token = localStorage.getItem('token') || {};
  constructor(private http: HttpClient, private router: Router) { }

  comptecand(id, data) {
    const url = `${this.BaseUrl}/Condidat/Parametrage/${id}`;
    return this.http.put(url, data);
  }
  modifPasscand(id, data) {
    const url = `${this.BaseUrl}/Condidat/changepasscand/${id}`;
    return this.http.put(url, data);
  }
}
