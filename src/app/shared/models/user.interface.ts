export interface IUser{
  id: number;
  username: string;
  email: string;
  profilePicture?: string;
  status: 'online' | 'offline' | 'away';
}
