import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PokemonListService} from './pokemon-list.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Pokemon} from '../pokemon';
import {of} from 'rxjs';
import {LoadPokemonListFail, LoadPokemonListSuccess} from './pokemon-list.actions';


@Injectable()
export class PokemonListEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private service: PokemonListService
  ) {
  }

  @Effect() loadPokemonList$ = this.actions$.pipe(
    ofType('LOAD_POKEMON_LIST'),
    switchMap(() => this.service.loadPokemons().pipe(
      map((res: Pokemon[]) => (new LoadPokemonListSuccess(res))),
      catchError((error: HttpErrorResponse) => of(new LoadPokemonListFail(error)))
    ))
  );
}
