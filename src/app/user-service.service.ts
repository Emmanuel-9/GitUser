import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../app/users';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  currentUser: Users
  private userUrl = 'https://api.github.com/users/Emmanuel-9'
  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<Users>{
    return this.http.get<Users>(this.userUrl);
  }
  
}
