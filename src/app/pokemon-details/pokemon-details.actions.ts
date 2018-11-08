import { Action } from '@ngrx/store';
import { Pokemon } from '../pokemon';
import { HttpResponse } from '@angular/common/http';

export const LOAD_POKEMON_DETAILS = 'LOAD_BEER_DETAILS';
export const LOAD_POKEMON_DETAILS_SUCCESS = 'LOAD_BEER_DETAILS_SUCCESS';
export const LOAD_POKEMON_DETAILS_FAIL = 'LOAD_BEER_DETAILS_FAIL';

  export class LoadPokemonDetails implements Action {
    readonly type = LOAD_POKEMON_DETAILS;

    constructor(public payload: number) {}
  }

export class LoadPokemonDetailsSuccess implements Action {
  readonly type = LOAD_POKEMON_DETAILS_SUCCESS;

  constructor(public ppayload: Pokemon) {}

}

export class LoadPokemonDetailsFail implements Action {
    readonly type = LOAD_POKEMON_DETAILS_FAIL;

    constructor(public payload: HttpResponse) {}
}


export type PokemonDetailsActions = LoadPokemonDetails | LoadPokemonDetailsSuccess | LoadPokemonDetailsFail;
