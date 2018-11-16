import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import {PokemonRoutingModule} from './pokemon-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    PokemonRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [

  ],
  exports: [
    PokemonListComponent,
    PokemonDetailsComponent
  ]
})
export class PokemonModule { }
