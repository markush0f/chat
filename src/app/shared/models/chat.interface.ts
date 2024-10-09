export interface IChat {
  chatId: number;
  type: 'private' | 'group';
  participants: number[];
  chatName: string;
  messages: IChat[];
}
