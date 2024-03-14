import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { StudentUserComponent } from './student-user/student-user.component';
import { TeacherUserComponent } from './teacher-user/teacher-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path: 'admin-user',
    component: AdminUserComponent,
    children: []
  },
  {
    path: 'student-user',
    component: StudentUserComponent,
    children: []
  },
  {
    path: 'teacher-user',
    component: TeacherUserComponent,
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