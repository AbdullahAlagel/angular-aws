import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { JwtInterceptor } from "./interceptor/jwt.interceptor";
import { ErrorInterceptor } from "./interceptor/error.interceptor";


@NgModule({
    declarations: [
    //   ...layout.layout,
    //   AlertComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
    //   SvgIconModule,
    //   DCCTranslatorModule.forRoot({
    //     defaultLang: 'ar',
    //     storagePrefix: 'ferhado-language'
    //   }),
    //   ScrollPanelModule,
    //   OverlayPanelModule,
    //   PanelMenuModule,
      MessagesModule,
      MessageModule
    ],
    exports: [HttpClientModule, ReactiveFormsModule],
    providers: [
    //   UtilityService,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },//for token service
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
      // fakeBackendProvider
    ]
  })
export class CoreModule {}