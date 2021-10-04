import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/shared/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {

  className: string = localStorage.getItem('class');

  chat: Observable<Message[]>;
  message: Message = new Message();
  email: any = localStorage.getItem('email');

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chat = this.chatService.getAllByClass(this.className);
  }

  send() {
    let date: Date = new Date();

    this.message.from = this.email;
    this.message.class = this.className;
    this.message.date = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
    this.message.time = date.getHours() + ':' + date.getMinutes();

    if (this.chatService.checkMessage(this.message)) {
      if (this.chatService.createOne(this.message)) {
        this.clear();
      }
    }
  }

  clear() {
    this.message.message = '';
  }
}