import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
