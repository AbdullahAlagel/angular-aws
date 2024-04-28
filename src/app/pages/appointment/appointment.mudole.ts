import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageService } from 'primeng/api';
import { SpinnerModule } from '../spinner/spinner.mudole';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { SearchAppointmentComponent } from './search-appointment/search-appointment.component';
import { AddEditAppointmentComponent } from './add-edit-appointment/add-edit-appointment.component';

@NgModule({
  imports: [
    AppointmentRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    // HeaderModule,
    SpinnerModule,
  ],
  declarations: [
    // add component to call another component
    SearchAppointmentComponent,
    AddEditAppointmentComponent,
  ],
  providers: [MessageService],
})
export class AppointmentModule {}
