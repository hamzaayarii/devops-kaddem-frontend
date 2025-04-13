import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiUrl = '/users';

  constructor(private http: HttpClient) { }

  signin(credentials: { email: string, password: string }): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u =>
          u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          // Generate a simple JWT-like token
          const token = btoa(JSON.stringify(user));
          return {
            accessToken: token,
            user: {
              email: user.email,
              role: user.role
            }
          };
        } else {
          throw new Error('Invalid credentials');
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
  }

  getCurrentUserRole(): string | null {
    return localStorage.getItem('role');
  }
}
