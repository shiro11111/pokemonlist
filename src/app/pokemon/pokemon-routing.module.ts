import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
