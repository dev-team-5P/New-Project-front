import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule, 
    ChatRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ ChatComponent ]
})
export class ChatModule { }