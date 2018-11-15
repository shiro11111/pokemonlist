import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { LoadPokemonList } from '../pokemon.actions';
import { PokemonState } from '../pokemon.reducers';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { SetToolBarContentAction } from '../../toolbar/toolbar.actions';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  list$: Observable<Pokemon[]>;
  displayedColumns = ['number', 'name'];
  loader$: Observable<boolean>;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadPokemonList());
    this.list$ = this.store.select('pokemonState').pipe(
      map((state: PokemonState) => state && state.list && state.list.data));

    this.loader$ = this.store.select('pokemonState').pipe(
      map((state: PokemonState) => state && state.list && state.list.loading));

    this.store.dispatch(new SetToolBarContentAction('My Pokemon List'));
  }

  onRowClicked(element: Pokemon): void {
    // console.log(element);
    this.router.navigate(['details', element.name], { relativeTo: this.route });
  }
}

