import { Injectable } from '@angular/core';
import { IMessage } from '../shared/models/message.interface';



@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  

  constructor() { }
  createMessage(params: IMessage) {

  }
}
