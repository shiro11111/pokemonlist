import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import { BeerRoutingModule } from './beer-routing.module';
import { MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@NgModule({
  declarations: [
    BeerListComponent,
    BeerDetailsComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    BeerRoutingModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ],
  providers: [],
  exports: [
    BeerListComponent,
    BeerDetailsComponent
  ]
})
export class BeerModule {}
