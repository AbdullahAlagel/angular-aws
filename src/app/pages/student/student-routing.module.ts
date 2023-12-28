import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';

const routes: Routes = [
  {
    path: 'add-edit-student',
    component: AddEditStudentComponent,
    children: []
  },
  {
    path: 'find-students',
    component: SearchStudentComponent,
    children: []
  },
  {
    path: 'edit-student/:id',
    component: AddEditStudentComponent,
    data: { breadcrumb: '', title: '' },
    children: []
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}