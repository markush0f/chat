import { Component } from '@angular/core';
import { NavbarChatComponent } from "./navbar-chat/navbar-chat.component";
import { MessageComponent } from "../message/message.component";
import { ChatContentComponent } from "./chat-content/chat-content.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NavbarChatComponent, MessageComponent, ChatContentComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  constructor() {

  }

}
