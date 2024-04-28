import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditOilComponent } from './add-edit-oil/add-edit-oil.component';
import { SearchOilComponent } from './search-oil/search-oil.component';
import { AddEditRequestedOilComponent } from './add-edit-requested-oil/add-edit-requested-oil.component';
import { ListRequestedOilComponent } from './list-requested-oil/list-requested-oil.component';

const routes: Routes = [
  {
    path: 'add-edit-oil',
    component: AddEditOilComponent,
    children: []
  },
  {
    path: 'find-oil',
    component: SearchOilComponent,
    children: []
  },
  {
    path: 'edit-oil/:id',
    component: AddEditOilComponent,
    data: { breadcrumb: '', title: '' },
    children: []
  }, 
  {
    path: 'add-edit-requested-oil',
    component: AddEditRequestedOilComponent,
    data: { breadcrumb: '', title: '' },
    children: []
  },
  {
    path: 'add-edit-requested-oil/:id',
    component: AddEditRequestedOilComponent,
    data: { breadcrumb: '', title: '' },
    children: []
  }, 
  {
    path: 'list-requested-oil',
    component: ListRequestedOilComponent,
    data: { breadcrumb: '', title: '' },
    children: []
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OilRoutingModule {}