import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  }

  constructor(private _http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject([]);
  }

  get users$(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = "https://angular-material-api.azurewebsites.net/users";

    return this._http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
        this._users.next([...data]);
      }, error => {
        console.log("Failed to fetch users");
      });
  }

  userById(id: number): User {
    return this.dataStore.users.find(x => x.id == id);
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._users.next([...this.dataStore.users]);
      resolve(user);
    });
  }
}
