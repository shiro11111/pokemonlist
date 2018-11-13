import { Component, OnInit, ViewChild } from '@angular/core';
import {List, Pokemon} from '../../models/pokemon';
import { Observable, of } from 'rxjs';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
import {LoadPokemonList} from '../pokemon.actions';
import {PokemonState} from '../pokemon.reducers';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {SetToolBarContentAction} from '../../toolbar/toolbar.actions';
import { MatSort, Sort } from '@angular/material';
import { RxDataSource } from '../../shared/rx-data-source';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  list$: Observable<Pokemon[]>;
  displayedColumns = ['number', 'name'];
  dataSource: RxDataSource<Pokemon>;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadPokemonList());
    this.list$ = this.store.select('pokemonState').pipe(
      map((state: PokemonState) => state && state.list));
    this.store.dispatch(new SetToolBarContentAction('My Pokemon List'));

    this.dataSource = new RxDataSource<Pokemon>(this.list$, of({ direction: this.sort.direction, active: this.sort.active }));
  }

  onRowClicked(element: Pokemon): void {
    console.log(element);
    this.router.navigate(['details', element.name], {relativeTo: this.route});
  }

  sortData(sort): void {
    // this.dataSource.sort = this.sort;
    console.log('sort', sort);
  }
}
