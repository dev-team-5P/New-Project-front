import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  BaseUrl = environment.baseuri;
  token = localStorage.getItem('token');
  constructor(private http: HttpClient, private router: Router) { }
  
  getall() {
    // tslint:disable-next-line: no-shadowed-variable
    // const queryParams = `?pagesize=${pageSize}&page=${currentPage}`;
    const url = `${this.BaseUrl}/superadmin/getetablisement`;
    return this.http.get<any[]>(url);
  }
}
