import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgPrimeNgModule } from "./primeng.module";




@NgModule({
    // declare what we need here 
    declarations: [],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgPrimeNgModule
    //   DCCTranslatorModule.forRoot({
    //     defaultLang: 'ar',
    //     storagePrefix: 'ferhado-language'
    //   }),
    //   SvgIconModule
    ],
    providers: [],
    exports: [
      NgPrimeNgModule
    //   DCCTranslatorModule, 
    //   SvgIconModule
    ]
  })
export class SharedModule { }