import {Action} from '@ngrx/store';
import {Pokemon} from '../pokemon';
import {HttpErrorResponse} from '@angular/common/http';


export const LOAD_POKEMON_LIST = 'LOAD_POKEMON_LIST';
export const LOAD_POKEMON_LIST_SUCCESS = 'LOAD_POKEMON_LIST_SUCCESS';
export const LOAD_POKEMON_LIST_FAIL = 'LOAD_POKEMON_LIST_FAIL';


export class LoadPokemonList implements Action {
  readonly type = LOAD_POKEMON_LIST;
}

export class LoadPokemonListSuccess implements Action {
  readonly type = LOAD_POKEMON_LIST_SUCCESS;

  constructor(public payload: Pokemon[]) {}
}

export class LoadPokemonListFail implements Action {
  readonly type = LOAD_POKEMON_LIST_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export type PokemonActions = LoadPokemonList | LoadPokemonListSuccess | LoadPokemonListFail;
