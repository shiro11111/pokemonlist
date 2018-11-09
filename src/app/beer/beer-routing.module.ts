import {RouterModule, Routes} from '@angular/router';
import {BeerListComponent} from './beer-list/beer-list.component';
import {NgModule} from '@angular/core';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

const routes: Routes = [
  {
    path: '',
    component: BeerListComponent
  },
  {
    path: 'details/:id',
    component: BeerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }
