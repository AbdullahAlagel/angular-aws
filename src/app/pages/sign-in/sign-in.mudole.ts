import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
// import { NgPrimeNgModule } from "src/app/shared/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { JwtInterceptor } from "src/app/core/interceptor/jwt.interceptor";
import { ErrorInterceptor } from "src/app/core/interceptor/error.interceptor";
import { SignInComponent } from "./sign-in.component";
import { SignInRoutingModule } from "./sign-in-routing.module";



@NgModule({
    imports: [
      CommonModule,
      SignInRoutingModule,
      ReactiveFormsModule,
      SharedModule
    ],
    declarations: [
      SignInComponent
      ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
          { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
  })
export class SignInModule {}