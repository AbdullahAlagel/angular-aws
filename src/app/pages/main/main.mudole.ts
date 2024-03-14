import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { CommonModule } from "@angular/common";
import { MainRoutingModule } from "./main-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CoreModule } from "src/app/core/core.module";
// import { CoreModule } from "src/app/core/core.module";
// import { HeaderModule } from "../../core/_layout/header/header.mudole";


@NgModule({
    imports: [
      // CommonModule,
      MainRoutingModule,
      ReactiveFormsModule,
      SharedModule,
      CoreModule,
    ],
    declarations: [ // add component to call another component 
      MainComponent
      ],
    providers: [],
  })
export class MainModule {}