import {Action} from '@ngrx/store';
import {Item} from '../models/item';
import {HttpErrorResponse} from '@angular/common/http';

export const LOAD_BEERLIST = 'LOAD_BEERLIST';
export const LOAD_BEERLIST_SUCCESS = 'LOAD_BEERLIST_SUCCESS';
export const LOAD_BEERLIST_FAIL = 'LOAD_BEERLIST_FAIL';


export const LOAD_BEER_DETAILS = 'LOAD_BEER_DETAILS';
export const LOAD_BEER_DETAILS_SUCCESS = 'LOAD_BEER_DETAILS_SUCCESS';
export const LOAD_BEER_DETAILS_FAIL = 'LOAD_BEER_DETAILS_FAIL';


export class LoadBeerList implements Action {
  readonly type = 'LOAD_BEERLIST';
}

export class LoadBeerListSuccess implements Action {
  readonly type = 'LOAD_BEERLIST_SUCCESS';

  constructor(public payload: Item[]) {}
}

export class LoadBeerListFail implements Action {
  readonly type = 'LOAD_BEERLIST_FAIL';
  constructor(public payload: HttpErrorResponse) {}
}

export class LoadBeerDetails implements Action {
  readonly type = LOAD_BEER_DETAILS;

  constructor(public payload: number) {}
}


export class LoadBeerDetailsSuccess implements Action {
  readonly type = LOAD_BEER_DETAILS_SUCCESS;

  constructor(public payload: Item) {}
}


export class LoadBeerDetailsFail implements Action {
  readonly type = LOAD_BEER_DETAILS_FAIL;

  constructor(public payload:  HttpErrorResponse ) {}
}




export type BeerActions = LoadBeerList
  |  LoadBeerListSuccess | LoadBeerListFail | LoadBeerDetails | LoadBeerDetailsSuccess | LoadBeerDetailsFail;
