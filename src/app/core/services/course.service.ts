import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../types/CourseOutput';
import { environment } from 'src/environments/environment.prod';


export class CourseDto {
  courseName:string=""
  insertDate:string=""
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {  
  
  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get<Course[]>(environment.apiBaseUrl + `api/v1/course`);
  }


  addNewCourse(course:Course) {
    const courseRequest = new CourseDto;
    courseRequest.courseName=course.courseName
    courseRequest.insertDate=course.insertDate
    return this.http.post<Course>(environment.apiBaseUrl + `api/v1/new-course`,courseRequest);
  }

  findCourseById(id: number) {
    return this.http.get<Course>(environment.apiBaseUrl + `api/v1/course/${id}`);
  }

  updateCourse(id: any, couser: Course) {
    const courseRequest = new CourseDto;
    courseRequest.courseName=couser.courseName
    courseRequest.insertDate=couser.insertDate
    return this.http.put<Course>(environment.apiBaseUrl + `api/v1/course-update/${id}`,courseRequest);
  }


}
