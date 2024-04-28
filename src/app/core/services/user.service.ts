import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { UsersOutput } from "../types/UsersOutput";
import { UntypedFormGroup } from "@angular/forms";
import { SignInDto } from "src/app/pages/users/types/SignInDto";


@Injectable({
    providedIn: 'root'
  })
  export class UserService {
   
    constructor(private http: HttpClient) { }
    

    public getAllUsers() {
      return this.http.get<UsersOutput[]>(environment.apiBaseUrl+`api/v1/find-users`);
    }

    public getUserById(id:number) {
      return this.http.get<UsersOutput>(environment.apiBaseUrl+`api/v1/find-user/${id}`);
    }
  
  public AddUser(v:UntypedFormGroup) {
      this.signInDto.email= v.value.email
      this.signInDto.password= v.value.password
      this.signInDto.username= v.value.userId
      this.signInDto.userRole= v.value.type
      this.signInDto.mobile= v.value.mobile
    return this.http.post(environment.apiBaseUrl+`api/v1/add-user`,this.signInDto);
    }

    signInDto=new SignInDto(); 
    public UpdateUser(id: number,v:UntypedFormGroup) {
      this.signInDto.email= v.value.email
      this.signInDto.password= v.value.password
      this.signInDto.username= v.value.userId
      this.signInDto.userRole= v.value.type
      this.signInDto.mobile= v.value.mobile
    return this.http.put(environment.apiBaseUrl + `api/v1/update-user/${id}`,this.signInDto);
    }
  }