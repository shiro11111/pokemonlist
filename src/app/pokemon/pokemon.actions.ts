import {Action} from '@ngrx/store';
import {Pokemon} from '../models/pokemon';
import {HttpErrorResponse} from '@angular/common/http';


export const LOAD_POKEMON_LIST = 'LOAD_POKEMON_LIST';
export const LOAD_POKEMON_LIST_SUCCESS = 'LOAD_POKEMON_LIST_SUCCESS';
export const LOAD_POKEMON_LIST_FAIL = 'LOAD_POKEMON_LIST_FAIL';
export const LOAD_POKEMON_DETAILS = 'LOAD_POKEMON_DETAILS';
export const LOAD_POKEMON_DETAILS_SUCCESS = 'LOAD_POKEMON_DETAILS_SUCCESS';
export const LOAD_POKEMON_DETAILS_FAIL = 'LOAD_POKEMON_DETAILS_FAIL';



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

export class LoadPokemonDetails implements Action {
  readonly type = LOAD_POKEMON_DETAILS;

  constructor(public payload: string) {
  }
}

export class LoadPokemonDetailsSuccess implements Action {
  readonly type = LOAD_POKEMON_DETAILS_SUCCESS;

  constructor(public payload: Pokemon) {}

}

export class LoadPokemonDetailsFail implements Action {
  readonly type = LOAD_POKEMON_DETAILS_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export type PokemonActions = LoadPokemonList
  | LoadPokemonListSuccess | LoadPokemonListFail | LoadPokemonDetails | LoadPokemonDetailsSuccess | LoadPokemonDetailsFail;
