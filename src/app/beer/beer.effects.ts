import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BeerService } from './beer.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Item } from '../models/item';
import {
  LoadBeerDetails,
  LoadBeerDetailsFail,
  LoadBeerDetailsSuccess,
  LoadBeerListFail,
  LoadBeerListSuccess
} from './beer.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class BeerEffects {

  constructor(
    private actions$: Actions,
    private service: BeerService
  ) {}

  @Effect() loadList$ = this.actions$.pipe(
    ofType('LOAD_BEERLIST'),
    switchMap(() => this.service.loadBeerList().pipe(
      map((res: Item[]) => new LoadBeerListSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadBeerListFail(error)))
    ))
  );

  @Effect() loadDetails$ = this.actions$.pipe(
    ofType('LOAD_BEER_DETAILS'),
    map((action: LoadBeerDetails) => action.payload as number),
    switchMap((id: number) => this.service.loadBeerDetails(id).pipe(
      map((res: Item) => new LoadBeerDetailsSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadBeerDetailsFail(error)))
    ))
  );
}

