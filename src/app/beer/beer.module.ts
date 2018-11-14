import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
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
    MatTableModule,
    BeerRoutingModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  exports: [
    BeerListComponent,
    BeerDetailsComponent
  ]
})
export class BeerModule {}
