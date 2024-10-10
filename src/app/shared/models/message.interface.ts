export interface IMessage {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  type: 'text'

}
