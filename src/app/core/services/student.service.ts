import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Student } from "src/app/pages/main/types/Student";
import { environment } from "src/environments/environment.prod";

export class StudentDto {
  firstName:string=""
  lastName:string=""
  address:string=""
  phone:string=""
}
@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
  
    constructor(private http: HttpClient) { }
  
    getAllStudent() {
      return this.http.get<Student[]>(environment.apiBaseUrl + `api/v1/find`);
    }

    AddStudent(student:Student) {
      // let queryParams = new HttpParams();
      // queryParams = queryParams.append("firstName", student.firstName);
      // queryParams = queryParams.append("lastName", student.lastName);
      // queryParams = queryParams.append("address", student.address);
      // queryParams = queryParams.append("phone", student.phone);
      const stu = new StudentDto;
      stu.firstName=student.firstName
      stu.lastName=student.lastName
      stu.address=student.address
      stu.phone=student.phone
      console.log(stu)
      return this.http.post<Student>(environment.apiBaseUrl + `api/v1/student`,stu);
    }

     findStudentById(id:number){
      return this.http.get<Student>(environment.apiBaseUrl + `api/v1/find/${id}`);
     }
   

     updateStudent(id:number,student:Student){
      const stu = new StudentDto;
      stu.firstName=student.firstName
      stu.lastName=student.lastName
      stu.address=student.address
      stu.phone=student.phone
      console.log(stu)
      return this.http.put<Student>(environment.apiBaseUrl + `api/v1/update/${id}`,stu);
     }
  } 
  
  