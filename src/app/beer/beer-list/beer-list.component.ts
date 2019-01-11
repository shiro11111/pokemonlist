import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { combineLatest, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { select } from '@ngrx/store';
import { filter, map, startWith } from 'rxjs/operators';
import { LoadBeerList } from '../beer.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerState } from '../beer.reducers';
import { SetToolBarContentAction } from '../../toolbar/toolbar.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { beerIbuNumber, beerListSelector, beerNamesSelector, getAllBeersState, getBeerIds } from '../beer.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beer$: Observable<Item>;
  list$: Observable<Item[]>;
  filteredList$: Observable<Item[]>;
  loader$: Observable<boolean>;
  form: FormGroup;
  displayedColumns = ['number', 'name'];

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadBeerList());

    this.store.pipe(select(beerListSelector)).subscribe(data => {
      console.log('state', data);
    });

    this.store.pipe(select(beerNamesSelector)).subscribe(data => {
      console.log('beers names', data);
    });

    this.store.pipe(select(getBeerIds)).subscribe(data => {
      console.log(data);
    });

    this.store.pipe(select(beerIbuNumber)).subscribe(data => {
      console.log('ibu > 50', data);
    });

    this.createForm();

    this.list$ = this.store.pipe(
      select('beerState'),
      map((state: BeerState) => state && state.list.data)
    );

    this.filteredList$ = combineLatest(
      this.form.get('search').valueChanges.pipe(startWith('')),
      this.list$
    ).pipe(
      filter(([searchValue, list]) => !!(list)),
      map(([searchValue, list]) => {
        console.log(searchValue);
        if (!!list && searchValue === '') {
          return list;
        } else {
          return list.filter((listItem: Item) => listItem.name.includes(searchValue));
        }
      })
    );

    this.beer$ = this.store.pipe(
      select('beerState'),
      map((state: BeerState) => state && state.beer && state.beer.data)
    );

    this.loader$ = this.store.select('beerState').pipe(
      map((state: BeerState) => state && state.list && state.list.loading));
    this.store.dispatch(new SetToolBarContentAction('My Beer List'));
  }

  onRowClicked(id: number): void {
    if (id) {
      this.router.navigate([`details/${id}`], { relativeTo: this.route });
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      search: null
    });
  }
}
