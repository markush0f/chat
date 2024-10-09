import { Component } from '@angular/core';
import { IMessage } from '../../shared/models/message.interface';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  message: IMessage[] = [
    {
      authorId: 1,
      content: 'Hi!! How are youuu????'
    },

    {
      authorId: 2,
      content: 'Hellooo!! fine, and you????'
    },
    {
      authorId: 1,
      content: 'Im fine too!!'
    },
    {
      authorId: 1,
      content: 'What are you doing today?'
    }

  ]
}
