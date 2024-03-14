import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found.component";
import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";


@NgModule({
    imports: [
      PageNotFoundRoutingModule
    ],
    declarations: [ // add component to call another component  
    PageNotFoundComponent],
    providers: [],
  })
export class PageNotFoundModule {}