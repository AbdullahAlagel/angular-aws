import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageService } from 'primeng/api';
import { SpinnerModule } from '../spinner/spinner.mudole';

import { UsersRoutingModule } from './users-routing.module';

import { UserComponent } from './user-page/user.component';
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
    UserComponent,
    ListUsersComponent
  ],
  providers: [MessageService],
})
export class UserstModule {}
