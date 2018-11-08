import * as PokemonActions from './pokemon-list.actions';
import {Pokemon} from '../pokemon';
import {LoadPokemonListFail} from './pokemon-list.actions';


export interface PokemonListState {
  list: Pokemon[];
}

const initialState: PokemonListState = {
  list: []
};

export function pokemonListReducer(state = initialState, action: PokemonActions.PokemonActions) {
  switch (action.type) {
    case PokemonActions.LOAD_POKEMON_LIST:
      return {
        ...state
      };
    case PokemonActions.LOAD_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case PokemonActions.LOAD_POKEMON_LIST_FAIL:
      return {
        ...state
      }
    default:
      return state;
  }
}
