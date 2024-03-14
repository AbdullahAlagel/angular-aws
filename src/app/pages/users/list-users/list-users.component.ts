import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Users } from 'src/app/core/types/usersOutput';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit{

  users: Users[]=[];
  
  constructor(private usersService: UserService,private router : Router){

  }
  
  ngOnInit() {
    
    this.usersService.getAllUsers().subscribe((data) => {
       this.users=data 
       
    });
}


editUser(userId:number){

}

deleteUser(userId:number){
  
}


}
