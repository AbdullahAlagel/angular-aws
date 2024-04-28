import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { UsersOutput } from 'src/app/core/types/UsersOutput';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit{

  users: UsersOutput[]=[];
  
  constructor(private usersService: UserService,private router : Router){

  }
  
  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data) => {
       this.users=data 
       
    });
}


editUser(id:number){
  this.router.navigate(['/add-edit-user/'+id]);
}

deleteUser(id:number){
  this.router.navigate(['/delete-user/'+id]);
}


}
