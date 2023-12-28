import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [CommonModule, LayoutRoutingModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  providers: [
    //   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //       { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    // fakeBackendProvider
  ],
})
export class LayoutModule {}
