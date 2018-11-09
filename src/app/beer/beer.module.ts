import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { BeerRoutingModule } from './beer-routing.module';

@NgModule({
  declarations: [
    BeerListComponent,
    BeerDetailsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    BeerRoutingModule
  ],
  providers: [],
  exports: [
    BeerListComponent,
    BeerDetailsComponent
  ]
})
export class BeerModule {
}
