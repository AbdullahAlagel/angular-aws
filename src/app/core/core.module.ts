import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { JwtInterceptor } from "./interceptor/jwt.interceptor";
import { ErrorInterceptor } from "./interceptor/error.interceptor";
import * as layout from "./_layout";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../app.module";


@NgModule({
    declarations: [
      ...layout.layout,
    ],
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
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
      MessageModule,
      SharedModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
      }),
    ],
    exports: [HttpClientModule, ReactiveFormsModule],
    providers: [
    //   UtilityService,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },//for token service
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ]
  })
export class CoreModule {}