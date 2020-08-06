import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  listeCandidats: any;
  chosenUser: any;
  listeMessages: any;
  messageForm: FormGroup;
  conversation: any;
  constructor(private socket: Socket, public chatService: ChatService, public auth: AuthService) {
    this.listeMessages = [];
    this.listeCandidats = [];
    this.messageForm = new FormGroup({
      content: new FormControl(''),
      user: new FormControl(''),
    });
  }

  ngOnInit() {
    this.messageForm = new FormGroup({
      content: new FormControl(''),
      user: new FormControl(this.auth.connectedUser._id),
    });
    this.socket.on('newUserAdded', () => {
      this.auth.getListeUsers().subscribe((res: any) => {
        this.listeCandidats = res.filter(obj => obj._id !== this.auth.connectedUser._id);
      });
   });
    this.auth.getListeUsers().subscribe((res: any) => {
      this.listeCandidats = res.filter(obj => obj._id !== this.auth.connectedUser._id);
      this.clickUser(this.listeCandidats[0]._id);
    });
    this.socket.on('newMessageSended', () => {
       this.clickUser(this.chosenUser);
       console.log('hahahaha');
    });
  }
  clickUser(idCandidat) {
    this.chosenUser = idCandidat;
    this.chatService.getPrivateMessage(idCandidat, this.auth.connectedUser._id).subscribe( (res: any) => {
      console.log(res);
      this.conversation = res._id;
      this.listeMessages = res.messages;
    });
  }
  sendMessage() {
     console.log('clicked');
     this.chatService.sendMessage(this.messageForm.value, this.conversation).subscribe();
  }

}
