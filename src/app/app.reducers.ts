import * as fromPokemonList from './pokemon/pokemon-list/pokemon-list.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  pokemonList: fromPokemonList.PokemonListState;
}


export const reducers: ActionReducerMap<AppState> = {
  pokemonList: fromPokemonList.pokemonListReducer
};
