import { Pipe, PipeTransform } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Pipe({
  name: 'isAdult',
  pure: false
})
export class IsAdultPipe implements PipeTransform {
  transform(users: User[]): User[] {
    if (!users) return [];
    return users.filter(user => user.age >= 18);
  }
}
