import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss']
})
export class AddEditStudentComponent {

  messages: Message[] = []
  editMode: boolean = false;
 
  constructor(private formBuilder: UntypedFormBuilder,
    private studentService:StudentService, 
    private activatedRoute: ActivatedRoute,
    private router:Router){
    this.updateUser();
  }
 
  student: FormGroup = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: ["", Validators.required],
    phone: ["", Validators.required],
  })

  submit(){
    if (this.student.invalid) {
      for (const control of Object.keys(this.student.controls)) {
        this.student.controls[control].markAsTouched();
      }
      return;
    }

    if (this.editMode) {
      this.studentService.updateStudent(this.userId,this.student.value).subscribe(a => {
        console.log(a)
        this.messages = [{ severity: 'info', summary: 'Student has been updated successfully ', detail: '' }]
        setTimeout(() => {
          this.router.navigate(['/main'])
        }, 
        3000);
      },err => {
        console.log(err)
      })
    } else {
    
      this.studentService.AddStudent(this.student.value).subscribe(a => {
      console.log(a)
      this.messages = [{ severity: 'success', summary: 'Student has been added successfully', detail: '' }]
      setTimeout(() => {
        this.router.navigate(['/main'])
      }, 
      3000);
    },err => {
      console.log(err)
    })
  }
  

}

userId:any
  updateUser(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if ( this.userId) {
      this.editMode = true; 
      // call student by id 
      this.studentService.findStudentById(Number( this.userId)).subscribe(r=>{
        this.student.setValue({
          firstName:r.firstName,
          lastName:r.lastName,
          address:r.address,
          phone:r.phone
        });
      }, (err) => {
        this.messages = [{ severity: 'error', summary: err, detail: '...' }]
      })
     
    }
  }

}
