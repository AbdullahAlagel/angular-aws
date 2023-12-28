import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";
import { AddEditStudentComponent } from "./add-edit-student/add-edit-student.component";
import { SearchStudentComponent } from "./search-student/search-student.component";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student/student.component";
import { MessageService } from "primeng/api";


@NgModule({
    imports: [
      StudentRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      SharedModule,
      
    ],
    declarations: [ // add component to call another component 
      AddEditStudentComponent,
      SearchStudentComponent,
      StudentComponent,
          ],
    providers: [MessageService
    ],
  })
export class StudentModule {}