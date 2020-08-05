import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EtablissementService {

  BaseUrl = environment.baseuri;
  token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  addcand(data) {
    const url = `${this.BaseUrl}/Etablisement/ajoucondidat`;
    return this.http.post(url, data);
  }

  getallcand() {
    const url = `${this.BaseUrl}/Etablisement/getcondidat`;
    return this.http.get(url);
  }

  getcandById(id) {
    const url = `${this.BaseUrl}/Etablisement/${id}`;
    return this.http.get(url);
  }

  updatecand(id, data) {
    const url = `${this.BaseUrl}/Etablisement/updatecondidat/${id}`;
    return this.http.put(url, data);
  }

  deletecand(id) {
    const url = `${this.BaseUrl}/Etablisement/delete/${id}`;
    return this.http.delete(url);
  }


}
