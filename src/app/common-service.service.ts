import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from './model/user';
import { USERS } from './mock-users';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the users
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the user
    return of(USERS.find(user => user.id === id));
  }
}
