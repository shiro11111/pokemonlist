
import { ActionReducerMap } from '@ngrx/store';
import * as fromBeerState from './beer/beer.reducers';
import * as fromPokemonState from './pokemon/pokemon.reducers'
import { beerReducer } from './beer/beer.reducers';
import { pokemonReducer } from './pokemon/pokemon.reducers';

export interface AppState {
  beerState: fromBeerState.BeerState;
  pokemonState: fromPokemonState.PokemonState;
  // pokemonState: fromPokemonState.PokemonState;
}


export const reducers: ActionReducerMap<AppState> = {
  // pokemonState: fromPokemonState.pokemonListReducer,
  beerState: beerReducer,
  pokemonState: pokemonReducer
};

