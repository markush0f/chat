import { Component } from '@angular/core';
import { NavbarChatComponent } from "./navbar-chat/navbar-chat.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NavbarChatComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
