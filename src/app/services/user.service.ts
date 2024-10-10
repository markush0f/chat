import { Injectable } from '@angular/core';
import { IUser } from '../shared/models/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser | null = {
    id: 1,
    username: 'markusiuu',
    email: 'markus@gmail.com',
    status: 'online'
  };

  constructor() {

  }
  getUser(): IUser | null {
    return this.user;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  logout(): void {

  }
}
