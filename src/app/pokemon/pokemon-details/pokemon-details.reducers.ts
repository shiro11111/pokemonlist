import { Pokemon } from '../../pokemon';
import {
  LOAD_POKEMON_DETAILS,
  LOAD_POKEMON_DETAILS_FAIL,
  LOAD_POKEMON_DETAILS_SUCCESS,
  PokemonDetailsActions
} from './pokemon-details.actions';

export interface PokemonDetailsState {
  pokemon: Pokemon;
}

const initialState: PokemonDetailsState = {
  pokemon: null
};

export function pokemonDetailsReducer (state = initialState, action: PokemonDetailsActions) {
  switch (action.type) {
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
