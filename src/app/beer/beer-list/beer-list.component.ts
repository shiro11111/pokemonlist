
import {Component, OnInit} from '@angular/core';
import {Item} from '../../models/item';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {select} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {LoadBeerList} from '../beer.actions';
import {ActivatedRoute, Router} from '@angular/router';
import { BeerState } from '../beer.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beer$: Observable<Item>;
  list$: Observable<Item[]>;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadBeerList());

    this.beer$ = this.store.pipe(
      select('beerState'),
      map((state: BeerState) => state && state.beer)
    );

    this.list$ = this.store.pipe(
      select('beerState'),
      map((state: BeerState) => state && state.list)
    );
  }

  navigateToDetails(id: number): void {
    if (id) {
      this.router.navigate([`details/${id}`], { relativeTo: this.route });
    }
  }

}
