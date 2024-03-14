import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api/message';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent {

  messages: Message[] = [];
  editMode: boolean = false;
  userId:any;
  loading:boolean=false;
  courseInput!: UntypedFormGroup;
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder,
    private courseService:CourseService, 
    private activatedRoute: ActivatedRoute,
    private router:Router){
    // this.updateUser();
  }

  ngOnInit(): void {
    this.courseInput = this.formBuilder.group({
      courseName: ["", Validators.required],
      insertDate: ["", Validators.required],
    })

    this.updateCourse();
  }
 
  get courseIn() { return this.courseInput.controls; }


  submit(){

    this.submitted = true;
    this.loading=true;

    if (this.courseInput.invalid) {
      for (const control of Object.keys(this.courseInput.controls)) {
        this.courseInput.controls[control].markAsTouched();
      }
      this.loading=false;
      return;
    }

    if (this.editMode) {
      this.courseService.updateCourse(this.userId,this.courseInput.value).subscribe(a => {
        this.messages = [{ severity: 'info', summary: 'Course has been updated successfully ', detail: '' }]
        this.loading=false;
        setTimeout(() => {
          this.router.navigate(['/main'])
        }, 
        3000);
      },err => {
        this.loading=false;
        console.log(err)
      })

    } else {
    
      this.courseService.addNewCourse(this.courseInput.value).subscribe(a => {
      this.messages = [{ severity: 'success', summary: 'Course has been added successfully', detail: '' }]
      this.loading=false;
      setTimeout(() => {
        this.router.navigate(['/main'])
      }, 
      3000);
      
    },err => {
      this.loading=false;
      console.log(err)
    })
  }
}


updateCourse(){
  this.userId = this.activatedRoute.snapshot.paramMap.get('id');
  if (this.userId) {
    this.editMode = true; 
    // call student by id 
    this.courseService.findCourseById(Number( this.userId)).subscribe(r=>{
      this.courseInput.setValue({
        courseName:r.courseName,
        insertDate:r.insertDate,
      });
    }, (err) => {
      this.messages = [{ severity: 'error', summary: err, detail: '...' }]
    })
   
  }
}
}
