import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = { username: 'john_doe' };
  constructor() { }
}
