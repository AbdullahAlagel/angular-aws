import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageService } from 'primeng/api';
import { SpinnerModule } from '../spinner/spinner.mudole';

import { UsersRoutingModule } from './users-routing.module';

import { AdminUserComponent } from './admin-user/admin-user.component';
import { StudentUserComponent } from './student-user/student-user.component';
import { TeacherUserComponent } from './teacher-user/teacher-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  imports: [
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SpinnerModule,
  ],
  declarations: [
    // add component to call another component
    AdminUserComponent,
    StudentUserComponent,
    TeacherUserComponent,
    ListUsersComponent
  ],
  providers: [MessageService],
})
export class UserstModule {}
