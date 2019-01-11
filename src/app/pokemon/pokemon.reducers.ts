// import * as PokemonActions from './pokemon.actions';

import { Pokemon } from '../models/pokemon';
import { PokemonActions,
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_SUCCESS,
  LOAD_POKEMON_LIST_FAIL,
  LOAD_POKEMON_DETAILS,
  LOAD_POKEMON_DETAILS_SUCCESS,
  LOAD_POKEMON_DETAILS_FAIL} from './pokemon.actions';
import { ListState } from '../shared/models/list-state';
import { ItemState } from '../shared/models/item-state';

export interface PokemonState {
  list: ListState<Pokemon>;
  pokemon: ItemState<Pokemon>;
}

const initialState: PokemonState = {
  list: {
    loading: false,
    data: []
  },
  pokemon: null
};

export function pokemonReducer(state = initialState, action: PokemonActions) {
  switch (action.type) {
    case LOAD_POKEMON_LIST:
      return {
        ...state,
        list: {
          loading: true,
          data: null
        }
      };
    case LOAD_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        list: {
          loading: false,
          data: action.payload
        }
      };
    case LOAD_POKEMON_LIST_FAIL:
      return {
        ...state,
        list: {
          loading: false,
          data: null
        }
      };
    case LOAD_POKEMON_DETAILS:
      return {
        ...state,
        pokemon: {
          loading: true
        }
      };
    case LOAD_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        pokemon: {
          loading: false,
          data: action.payload
        }
      };
    case LOAD_POKEMON_DETAILS_FAIL:
      return {
        ...state,
        pokemon: {
          loading: false
        }
      };
    default:
      return state;
  }
}

export const getPokemonListState = (state: PokemonState) => state.list;
export const getPokemonDetailsState = (state: PokemonState) => state.pokemon;
