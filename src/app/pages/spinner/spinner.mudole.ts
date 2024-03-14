import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./spinner.component";
import { SpinnerRoutingModule } from "./spinner-routing.module";
import { NgPrimeNgModule } from "src/app/shared/primeng.module";

@NgModule({
    imports: [SpinnerRoutingModule,NgPrimeNgModule],
    declarations: [SpinnerComponent],
    exports:[SpinnerComponent],
    providers: [
    ],
  })
export class SpinnerModule {}