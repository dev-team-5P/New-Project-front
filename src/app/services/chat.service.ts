import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  decoded: any;
  socket: any;
  token = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) {
    this.socket = io();
    this.decoded = jwt_decode(this.token);

  }
  getPrivateMessage(idCandidat1, idCandidat2) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.get('http://localhost:3000/chat/getPrivateMessage/' + idCandidat1 + '/' + idCandidat2, {headers: header});
  }
  sendMessage(message, idChat) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient.post('http://localhost:3000/chat/sendMessage/' + idChat, message, {headers: header});
  }
}
