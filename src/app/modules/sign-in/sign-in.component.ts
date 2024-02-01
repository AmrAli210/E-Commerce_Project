import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  auth = inject(AuthenticationService);
  router=inject(Router)

  hide: boolean = true;
  error:string='';

  eyeIcon = faEyeSlash;


  login: FormGroup = this.formBuilder.group({
    email: ['admin@12', [Validators.required, Validators.email]],
    password: ['admin@12', Validators.required],
  });
  ngOnInit(): void {}

  constructor() {}

  submit() {
    this.auth.login(this.login.value).subscribe({
      next: (success) =>{ this.handleLogin(success)},
      error: (error) => this.handleError(error) 
    });
  }

  handleLogin(token:object)
  {
    localStorage.setItem("token",JSON.stringify(token))
    this.error=''
    this.auth.isAuthenticated.next(true)
    this.auth.token.next(token)
    this.router.navigate(["/home"])

  }

  handleError(error:HttpErrorResponse){
    this.error=error.error.message
  }

  switchIcon() {
    this.hide = !this.hide;
    if (this.hide) {
      this.eyeIcon = faEyeSlash;
    } else {
      this.eyeIcon = faEye;
    }
  }

}
