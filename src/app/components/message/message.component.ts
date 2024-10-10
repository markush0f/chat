import { Component, Input, Output } from '@angular/core';
import { IMessage } from '../../shared/models/message.interface';
import { IUser } from '../../shared/models/user.interface';
import { UserService } from '../../services/user.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() message!: IMessage;
  @Input() user!: IUser | null;
  constructor(private userService: UserService) {

  }


}
