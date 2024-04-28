import { Component } from '@angular/core';
import { StudentService } from 'src/app/core/services/student.service';
import { Router } from '@angular/router';
import { Student } from '../../main/types/Student';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent {

  
  student: Student[]=[];

  constructor(private studentService: StudentService,private router : Router) {}

  ngOnInit() {
      this.studentService.getAllStudent().subscribe((data) => {
         this.student=data 
      });
  }


  editStudent(id:number){
    this.router.navigate(['/student/edit-student/'+id]);
  }

  deleteStudent(id:number){
    this.router.navigate(['/student/delete-student/'+id]);
  }
  
}
