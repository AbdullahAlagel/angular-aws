import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { CommonModule } from "@angular/common";
import { MainRoutingModule } from "./main-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";
import { LayoutComponent } from "../layout/layout.component";


@NgModule({
    imports: [
      CommonModule,
      MainRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      SharedModule,
      
    ],
    declarations: [ // add component to call another component 
      MainComponent,
      LayoutComponent
      ],
    providers: [
    //   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //       { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
          // provider used to create fake backend
          // fakeBackendProvider
    ],
  })
export class MainModule {}