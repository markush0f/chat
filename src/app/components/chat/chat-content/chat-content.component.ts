import { Component } from '@angular/core';
import { MessageComponent } from "../../message/message.component";
import { MessagesService } from '../../../services/messages.service';
import { IMessage } from '../../../shared/models/message.interface';
import { IUser } from '../../../shared/models/user.interface';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-chat-content',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './chat-content.component.html',
  styleUrl: './chat-content.component.css'
})
export class ChatContentComponent {
  constructor(private messageService: MessagesService, private userService: UserService) {

  }

  messages: IMessage[] = this.messageService.messages;
  user: IUser | null = this.userService.getUser();
}
