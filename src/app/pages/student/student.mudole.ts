import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { AddEditStudentComponent } from "./add-edit-student/add-edit-student.component";
import { SearchStudentComponent } from "./search-student/search-student.component";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student/student.component";
import { MessageService } from "primeng/api";
// import { HeaderModule } from "../../core/_layout/header/header.mudole";
import { SpinnerModule } from "../spinner/spinner.mudole";
// import { SpinnerComponent } from "../spinner/spinner.component";
// import { SpinnerLoaderModule } from "../spinner/spinner.mudole";


@NgModule({
    imports: [
      StudentRoutingModule,
      ReactiveFormsModule,
      SharedModule,
      // HeaderModule,
      SpinnerModule
    ],
    declarations: [ // add component to call another component 
      AddEditStudentComponent,
      SearchStudentComponent,
      StudentComponent,
     
          ],
    providers: [MessageService],
  })
export class StudentModule {}