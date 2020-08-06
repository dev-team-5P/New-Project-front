import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  BaseUrl = environment.baseuri;
  token = localStorage.getItem('token') || {};
  constructor(private http: HttpClient, private router: Router) { }
  getall() {
    // tslint:disable-next-line: no-shadowed-variable
    // const queryParams = `?pagesize=${pageSize}&page=${currentPage}`;
    const url = `${this.BaseUrl}/superadmin/getetablisement`;
    return this.http.get(url);
  }
  deleteetab(idetab) {
    const url = `${this.BaseUrl}/superadmin/deleteetab/${idetab}`;
    return this.http.delete(url);
  }
  parametrageducompte(id, data) {
    const url = `${this.BaseUrl}/superadmin/Parametrage/${id}`;
    return this.http.put(url, data);
  }
  modifPassadmin(id, data) {
    const url = `${this.BaseUrl}/superadmin/changepass/${id}`;
    return this.http.put(url, data);
  }
  /********************get etabli By Id************* */
  getetabliById(idetab) {
    const url = `${this.BaseUrl}/superadmin/${idetab}`;
    return this.http.get(url);
  }
  /******************update etabli*************** */
  updateEtabli(id, data) {
    const url = `${this.BaseUrl}/Etablisement/updatesuper/${id}`;
    return this.http.put(url, data);
  }
}
