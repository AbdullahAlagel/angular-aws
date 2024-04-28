import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Users } from "../types/usersOutput";
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    constructor(private http: HttpClient) { }
    

    getAllUsers() {
      return this.http.get<Users[]>(environment.apiBaseUrl + `api/v1/find-users`);
    }

  }