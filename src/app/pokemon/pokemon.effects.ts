import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PokemonService} from './pokemon.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Pokemon} from '../models/pokemon';
import {
  LoadPokemonDetails, LoadPokemonDetailsFail,
  LoadPokemonDetailsSuccess,
  LoadPokemonListFail,
  LoadPokemonListSuccess
} from './pokemon.actions';

@Injectable()
export class PokemonEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private service: PokemonService
  ) {
  }

  @Effect() loadPokemonList$ = this.actions$.pipe(
    ofType('LOAD_POKEMON_LIST'),
    switchMap(() => this.service.loadPokemons().pipe(
      map((res: Pokemon[]) => (new LoadPokemonListSuccess(res))),
      catchError((error: HttpErrorResponse) => of(new LoadPokemonListFail(error)))
    ))
  );

  @Effect() loadDetails$ = this.actions$.pipe(
    ofType('LOAD_POKEMON_DETAILS'),
    map((action: LoadPokemonDetails) => action.payload as string),
    switchMap((url: string) => this.service.loadPokemonDetails(url).pipe(
      map((res: Pokemon) => new LoadPokemonDetailsSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadPokemonDetailsFail(error)))
    ))
  );
}
