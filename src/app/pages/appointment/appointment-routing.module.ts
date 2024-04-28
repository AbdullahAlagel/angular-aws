import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditAppointmentComponent } from './add-edit-appointment/add-edit-appointment.component';
import { SearchAppointmentComponent } from './search-appointment/search-appointment.component';

const routes: Routes = [
  {
    path: 'add-edit-appointment',
    component: AddEditAppointmentComponent,
    children: []
  },
  {
    path: 'find-appointment',
    component: SearchAppointmentComponent,
    children: []
  },
  {
    path: 'edit-appointment/:id',
    component: AddEditAppointmentComponent,
    data: { breadcrumb: '', title: '' },
    children: []
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule {}