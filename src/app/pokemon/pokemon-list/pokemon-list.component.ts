import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {combineLatest, Observable} from 'rxjs';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
import {LoadPokemonList} from '../pokemon.actions';
import {PokemonState} from '../pokemon.reducers';
import {filter, map, startWith} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {SetToolBarContentAction} from '../../toolbar/toolbar.actions';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  list$: Observable<Pokemon[]>;
  displayedColumns = ['number', 'name'];
  loader$: Observable<boolean>;
  form: FormGroup;
  filteredList$: Observable<Pokemon[]>;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {


    this.store.dispatch(new LoadPokemonList());

    this.createForm();

    this.list$ = this.store.select('pokemonState').pipe(
      map((state: PokemonState) => state && state.list && state.list.data));

    this.loader$ = this.store.select('pokemonState').pipe(
      map((state: PokemonState) => state && state.list && state.list.loading));

    this.store.dispatch(new SetToolBarContentAction('My Pokemon List'));

    this.filteredList$ = combineLatest(
      this.form.get('search').valueChanges.pipe(startWith('')),
      this.list$
    ).pipe(
      filter(([searchValue, list]) => !!(list)),
      map(([searchValue, list]) => {
        // console.log(searchValue);
        if (!!list && searchValue === '') {
          return list;
        } else {
          return list.filter((listPokemon: Pokemon) => listPokemon.name.includes(searchValue));
        }
      })
    );
  }

  onRowClicked(element: Pokemon): void {
    // console.log(element);
    this.router.navigate(['details', element.name], {relativeTo: this.route});
  }

  createForm(): void {
    this.form = this.fb.group({
      search: this.fb.control(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(new RegExp('^[a-zA-Z]+$'))
      ])
    });
  }
}

