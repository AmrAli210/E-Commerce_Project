import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersSignUp } from '../interfaces/users.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  http = inject(HttpClient);
  isAuthenticated = new BehaviorSubject<boolean>(false);
  token = new BehaviorSubject<object>({});


  signUp(registration: FormGroup): Observable<UsersSignUp> {
    return this.http.post<UsersSignUp>('https://e-commerce-apis-k53h.onrender.com/api/register',registration);
  }

  login(login: FormGroup) {
    return this.http.post('https://e-commerce-apis-k53h.onrender.com/api/login', login);
  }
   
  constructor(private router: Router) {
    this.handleSuccessfulLogin()
  }

  handleSuccessfulLogin() {
    const token = localStorage.getItem('token');
    if (!!token) {      
      localStorage.setItem('token', token)
      this.isAuthenticated.next(true);

      if (!token) {        
        this.router.navigate(['/sign-in-page']);
      }
    }
  }
  
  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
    this.router.navigate(['/sign-in-page']);
  }
}
