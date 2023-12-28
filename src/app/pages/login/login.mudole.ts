import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
// import { NgPrimeNgModule } from "src/app/shared/primeng.module";
import { LoginComponent } from "./login.component";
import { SharedModule } from "src/app/shared/shared.module";
import { JwtInterceptor } from "src/app/core/interceptor/jwt.interceptor";
import { ErrorInterceptor } from "src/app/core/interceptor/error.interceptor";



@NgModule({
    imports: [
      CommonModule,
      LoginRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      SharedModule
      // NgPrimeNgModule,
    //   NgxCaptchaModule
    ],
    declarations: [
      LoginComponent
      ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
          { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
          // provider used to create fake backend
          // fakeBackendProvider
    ],
  })
export class LoginModule {}