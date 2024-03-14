import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/authentication.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  message: Message[] = []
  loginForm!: UntypedFormGroup;
  loading = false; 
  submitted = false;
  constructor(private formBuilder: UntypedFormBuilder, private router: Router,private auth:AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],email: ['', Validators.required], password: ['', Validators.required]
    });
}

  get userinput() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      for (const control of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[control].markAsTouched();
      }
      return;
    }
    this.loading = true;
    // this.router.navigate(['/main'])
    this.auth.signIn(this.userinput.username.value,this.userinput.email.value,this.userinput.password.value)
        .subscribe(
          data => {
            this.message = [{
              severity: 'success', summary: '', detail: "User has been added"
            }]
            setTimeout(() => {
              console.log("Log sign in",data)
              this.router.navigate(['/login'])
            }, 4000);
          } 
        ,
          error => {
            console.log("Log Login",error)
            this.message = [{
              severity: 'error', summary: '', detail: error
            }]
            this.loading = false;
          });;
  }
}
