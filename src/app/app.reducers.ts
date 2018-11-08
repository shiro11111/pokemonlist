import * as fromPokemonList from './pokemon-list/pokemon-list.reducers';

export interface AppState {
  pokemonList: fromPokemonList.PokemonListState;
}


export const reducers: ActionReduccerMap<AppState> = {
  pokemonList: fromPokemonList.pokemonListReducer
};
