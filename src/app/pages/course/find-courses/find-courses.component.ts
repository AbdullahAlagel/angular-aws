import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/core/types/CourseOutput';

@Component({
  selector: 'app-find-courses',
  templateUrl: './find-courses.component.html',
  styleUrls: ['./find-courses.component.scss']
})
export class FindCoursesComponent implements OnInit{

  courses: Course[]=[];

  constructor(private courseService:CourseService,private router:Router){

  }
  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe(a=>{
      this.courses=a;
    })
  }



  editCourse(id:number){
    this.router.navigate(['/course/'+id]);
  }
  deleteCourse(id:number){
    this.router.navigate(['/course/'+id]);
  }



}
