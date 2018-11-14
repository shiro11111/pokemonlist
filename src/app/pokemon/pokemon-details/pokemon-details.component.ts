import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Params} from '@angular/router';
import {filter, first, map, takeUntil, withLatestFrom} from 'rxjs/operators';
import {LoadPokemonDetails, LoadPokemonList} from '../pokemon.actions';
import {combineLatest, Observable, Subject} from 'rxjs';
import {Pokemon} from '../../models/pokemon';
import {PokemonState} from '../pokemon.reducers';
import {SetToolBarContentAction} from '../../toolbar/toolbar.actions';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  pokemon$: Observable<Pokemon[]>;
  details$: Observable<Pokemon>;

  private destroyed$: Subject<boolean> = new Subject();

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pokemon$ = this.store.select('pokemonState').pipe(
      map((state: PokemonState) => state && state.list.data));

    this.details$ = this.store.select('pokemonState').pipe(
      map((state: PokemonState) => state && state.pokemon));

    this.store.dispatch(new LoadPokemonList());

    combineLatest(
      this.route.params,
      this.pokemon$
    ).pipe(
      filter(([params, list]) => params && params.name && list && list.length > 0),
      first(),
      takeUntil(this.destroyed$)
    ).subscribe(([params, list]) => {
      const url = list.filter((item: Pokemon) => item && item.name && item.name === params.name)[0].url;
      this.store.dispatch(new LoadPokemonDetails(url));
      this.store.dispatch(new SetToolBarContentAction(`${params.name} details`));
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
