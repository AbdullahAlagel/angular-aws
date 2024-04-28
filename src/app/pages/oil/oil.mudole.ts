import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageService } from 'primeng/api';
import { SpinnerModule } from '../spinner/spinner.mudole';
import { SearchOilComponent } from './search-oil/search-oil.component';
import { AddEditOilComponent } from './add-edit-oil/add-edit-oil.component';
import { OilRoutingModule } from './oil-routing.module';
import { NgPrimeNgModule } from 'src/app/shared/primeng.module';
import { ListRequestedOilComponent } from './list-requested-oil/list-requested-oil.component';
import { AddEditRequestedOilComponent } from './add-edit-requested-oil/add-edit-requested-oil.component';
import { AgmCoreModule } from '@agm/core';




@NgModule({
  imports: [
    OilRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    NgPrimeNgModule,
    // AgmCoreModule.forRoot({
    //   // please get your own API key here:
    //   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey: 'AIzaSyDsmRCwyjiDzB89HJXZbqT3pHvxXt-rE2M'
    // })
  ],
  declarations: [
    // add component to call another component
    SearchOilComponent,
    AddEditOilComponent,
    ListRequestedOilComponent,
    AddEditRequestedOilComponent,
  ],
  providers: [MessageService],
})
export class OilModule {}
