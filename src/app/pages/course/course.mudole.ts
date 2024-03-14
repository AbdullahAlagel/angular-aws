import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgPrimeNgModule } from "src/app/shared/primeng.module";
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CourseRoutingModule } from './course-routing.module';
import { FindCoursesComponent } from './find-courses/find-courses.component';
import { SpinnerModule } from "../spinner/spinner.mudole";
import { MessageService } from "primeng/api";


@NgModule({
    declarations: [AddEditCourseComponent, FindCoursesComponent],
    imports: [
        CommonModule,
        CourseRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        SpinnerModule
    ],
    providers: [MessageService],
})
export class CourseModule {}
