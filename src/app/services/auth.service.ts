import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type User = {
  email: string;
  password: string;
};

type LoginRes = {
  accessToken: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000';
  http = inject(HttpClient);

  registerUser(data: User) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  loginUser(data: User) {
    return this.http.post<LoginRes>(`${this.apiUrl}/login`, data);
  }
}
