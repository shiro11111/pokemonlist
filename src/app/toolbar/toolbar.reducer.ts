import {Pokemon} from '../models/pokemon';
import {
  LOAD_POKEMON_DETAILS, LOAD_POKEMON_DETAILS_FAIL, LOAD_POKEMON_DETAILS_SUCCESS,
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_FAIL,
  LOAD_POKEMON_LIST_SUCCESS,
  PokemonActions
} from '../pokemon/pokemon.actions';
import {SET_TOOLBAR_CONTENT, ToolbarActions} from './toolbar.actions';

export interface ToolbarState {
  content: string;
}

const initialState: ToolbarState = {
  content: ''
};

export function toolbarReducer(state = initialState, action: ToolbarActions) {
  switch (action.type) {
    case SET_TOOLBAR_CONTENT:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
}
