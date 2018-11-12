// import * as PokemonActions from './pokemon.actions';

import { Pokemon } from '../models/pokemon';
import { PokemonActions,
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_SUCCESS,
  LOAD_POKEMON_LIST_FAIL,
  LOAD_POKEMON_DETAILS,
  LOAD_POKEMON_DETAILS_SUCCESS,
  LOAD_POKEMON_DETAILS_FAIL} from './pokemon.actions';

export interface PokemonState {
  list: Pokemon[];
  pokemon: Pokemon;
}

const initialState: PokemonState = {
  list: [],
  pokemon: null
};

export function pokemonReducer(state = initialState, action: PokemonActions) {
  switch (action.type) {
    case LOAD_POKEMON_LIST:
      return {
        ...state
      };
    case LOAD_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case LOAD_POKEMON_LIST_FAIL:
      return {
        ...state
      };
    case LOAD_POKEMON_DETAILS:
      return {
        ...state
      };
    case LOAD_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        pokemon: action.payload
      };
    case LOAD_POKEMON_DETAILS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
