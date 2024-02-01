import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  auth=inject(AuthenticationService)
  router=inject(Router)

  hide: boolean = true;
  error:string='';

  eyeIcon = faEyeSlash;

  registration: FormGroup = this.formBuilder.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^01[0-2]\d{8}$/)]],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}
  
  constructor() {}

  switchIcon() {
    this.hide = !this.hide;
    if (this.hide) {
      this.eyeIcon = faEyeSlash;
    } else {
      this.eyeIcon = faEye;
    }
  }

  submit() {
    this.auth.signUp(this.registration.value).subscribe(
      {
        next:(success)=>
        {
          this.handleSignUp()
          this.registration.reset()
        },
        error: (error)=> this.handleError(error)
      }
    );
    
  }
  handleSignUp()
  {
    this.error=''
    this.router.navigate(['/sign-in-page'])
  }

  handleError(error:HttpErrorResponse){
    this.error=error.error.message
  }


 
}
