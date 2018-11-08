import { Injectable } from '@angular/core';
import { PokemonDetailsService } from './pokemon-details.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoadPokemonDetails, LoadPokemonDetailsFail, LoadPokemonDetailsSuccess } from './pokemon-details.actions';
import { Pokemon } from '../pokemon';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class PokemonDetailsEffects {

  constructor(
    private actions$: Actions,
    private service: PokemonDetailsService
  ) {}

  @Effect() loadDetails$ = this.actions$.pipe(
    ofType('LOAD_POKEMON_DETAILS'),
    map((action: LoadPokemonDetails) => action.payload as number),
    switchMap((id: number) => this.service.loadPokemonDetails(id).pipe(
      map((res: Pokemon) => new LoadPokemonDetailsSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadPokemonDetailsFail(error)))
    ))
  );
}
