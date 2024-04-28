import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user-page/user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path: 'add-edit-user',
    component: UserComponent,
    children: []
  },
  {
    path: 'add-edit-user/:id',
    component: UserComponent,
    children: []
  },  
  {
    path: 'list-user',
    component: ListUsersComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}