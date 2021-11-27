import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loadUserInfo(): Observable<unknown> {
    return this.http.get<unknown>('/userinfo');
  }

  login(): void {
    location.href = '/login';
  }

  logout(): void {
    location.href = '/logout';
  }

}
