import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  messages: Message[] = [];
  editMode: boolean = false;
  userId: any;
  loading: boolean = false;
  userInput!: UntypedFormGroup;
  submitted = false;
  userType: { name: string; value: string }[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateUser();
  }
  ngOnInit(): void {
    this.userInput = this.formBuilder.group({
      type: ['', Validators.required],
      userId: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
    //  username: ['', Validators.required],
    });

    this.userType = [
      { name: 'Super Admin', value: 'SUPER_ADMIN_ROLE' },
      { name: 'Admin', value: 'ADMIN_ROLE' },
      { name: 'Server', value: 'SERVER_ROLE' },
      { name: 'User', value: 'USER_ROLE' },
    ];
  }

  get userInputControls() {
    return this.userInput.controls;
  }

  submit() {
    this.submitted = true;
    this.loading = true;
    if (this.userInput.invalid) {
      for (const control of Object.keys(this.userInput.controls)) {
        this.userInput.controls[control].markAsTouched();
      }
      this.loading = false;
      return;
    }

    if (this.editMode) {
      console.log("update");
      this.userService.UpdateUser(this.userId,this.userInput).subscribe(a => {
        this.messages = [{ severity: 'info', summary: 'User has been updated successfully ', detail: '' }]
        setTimeout(() => {
          this.loading=false;
          this.router.navigate(['/main'])
        },
        3000);
      },err => {
        this.loading=false;
        this.messages = [{ severity: 'error', summary: err, detail: '' }]
      })
    } else {
      console.log("add");
      this.userService.AddUser(this.userInput).subscribe(
        (a) => {
          console.log(a);
          this.loading = false;
          this.messages = [
            {
              severity: 'success',
              summary: 'User has been added successfully',
              detail: '',
            },
          ];
          setTimeout(() => {
            this.router.navigate(['/main']);
          }, 3000);
        },
        (err) => {
          this.loading = false;
          this.messages = [{ severity: 'error', summary: err, detail: '' }]
        }
      );
    }
  }

  updateUser() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId) {
      this.editMode = true;
      this.userService.getUserById(Number(this.userId)).subscribe(
        (r) => {
          this.userInput.setValue({
            type: r.type,
            userId: r.userId,
            password:'',
            email: r.email,
            mobile: r.mobile,
          });
        },
        (err) => {
          this.messages = [{ severity: 'error', summary: err, detail: '...' }];
        }
      );
    }
  }
}
