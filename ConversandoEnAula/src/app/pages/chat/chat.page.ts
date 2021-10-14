import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/shared/message';
import { ChatService } from 'src/app/services/chat.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private chatService: ChatService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.chat = this.chatService.getAllByClass(this.className);
  }

  send() {
    this.message.class = this.className;
    this.message.from = this.email;
    this.message.date = new Date().getTime();

    if (this.chatService.checkMessage(this.message)) {
      if (this.chatService.createOne(this.message)) {
        this.clear();
      }
    }
    else{ this.toastr.error('Numero de caratéres invalido: solo entre (1 y 21)', 'Estado del Mensaje'); }
  }

  clear() {
    this.message.message = '';
  }
}