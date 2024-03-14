import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgPrimeNgModule } from "./primeng.module";





@NgModule({
    // declare what we need here 
    // we declare component that related to user 
    declarations: [],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgPrimeNgModule
    //   SvgIconModule
    ],
    providers: [],
    exports: [
      NgPrimeNgModule
    //   SvgIconModule
    ]
  })
export class SharedModule { }