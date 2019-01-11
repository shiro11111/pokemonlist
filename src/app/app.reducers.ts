import { ActionReducerMap } from '@ngrx/store';
import * as fromBeerState from './beer/beer.reducers';
import * as fromPokemonState from './pokemon/pokemon.reducers';
import * as fromToolbarState from './toolbar/toolbar.reducer';
import { beerReducer } from './beer/beer.reducers';
import { pokemonReducer } from './pokemon/pokemon.reducers';
import { toolbarReducer } from './toolbar/toolbar.reducer';

export interface AppState {
  beerState: fromBeerState.BeerState;
  pokemonState: fromPokemonState.PokemonState;
  toolBarState: fromToolbarState.ToolbarState;
}

export const reducers: ActionReducerMap<AppState> = {
  beerState: beerReducer,
  pokemonState: pokemonReducer,
  toolBarState: toolbarReducer
};

export const getBeerState = (state: AppState) => state.beerState;

export const getPokemonState = (state: AppState) => state.pokemonState;

