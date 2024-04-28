import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { FindCoursesComponent } from './find-courses/find-courses.component';

const routes: Routes = [
  {
    path: 'course/add-edit-course',
    component: AddEditCourseComponent,
    children: [],
  },
  {
    path: 'course/:id',
    component: AddEditCourseComponent,
    children: [],
  },
  {
    path: 'course/find-courses',
    component: FindCoursesComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
