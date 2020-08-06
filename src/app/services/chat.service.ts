import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket: any;
  constructor(private httpClient: HttpClient) {
    this.socket = io();
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
