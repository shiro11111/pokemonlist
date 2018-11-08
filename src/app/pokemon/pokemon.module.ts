import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {PokemonListService} from './pokemon-list/pokemon-list.service';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {PokemonRoutingModule} from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonListService
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailsComponent
  ]
})
export class PokemonModule { }
