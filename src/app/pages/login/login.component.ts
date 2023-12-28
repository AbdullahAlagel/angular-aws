import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: Message[] = []
  loginForm!: UntypedFormGroup;
  loading = false; 
  submitted = false;
  constructor(private formBuilder: UntypedFormBuilder, private router: Router,private auth:AuthenticationService) { }
  
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], password: ['', Validators.required]
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
    this.auth.login(this.userinput.username.value,this.userinput.password.value)
    .pipe(first())
        .subscribe(
          
          data => {console.log("Log Login",data),this.router.navigate(['/main'])}
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
