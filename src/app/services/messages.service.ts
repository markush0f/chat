import { Injectable } from '@angular/core';
import { IMessage } from '../shared/models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: IMessage[] = [
    {
      content: 'Hi!! How are youuu????',
      id: 1,
      senderId: 1,
      receiverId: 2,
      timestamp: new Date,
      status: 'sent',
      type: 'text'
    },

    {
      content: 'Hellooo!! fine, and you????',
      id: 2,
      senderId: 2,
      receiverId: 1,
      timestamp: new Date,
      status: 'sent',
      type: 'text'
    },
    {
      content: 'Im fine too!!',
      id: 3,
      senderId: 1,
      receiverId: 2,
      timestamp: new Date,
      status: 'sent',
      type: 'text'
    },
    {
      content: 'What are you doing today?',
      id: 44,
      senderId: 1,
      receiverId: 2,
      timestamp: new Date,
      status: 'sent',
      type: 'text'
    }

  ]


  constructor() { }
  createMessage(params: IMessage) {

  }
}
