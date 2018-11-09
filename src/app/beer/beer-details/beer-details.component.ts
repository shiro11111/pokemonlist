import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from '../../models/item';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, first, map, takeUntil } from 'rxjs/operators';
import { LoadBeerDetails } from '../beer.actions';
import { BeerState } from '../beer.reducers';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit, OnDestroy {

  details$: Observable<Item>;

  private destroyed$: Subject<boolean> = new Subject();

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.pipe(
      first(),
      filter((params: Params) => params && params.id),
      map((params: Params) => params.id),
      takeUntil(this.destroyed$)
    ).subscribe((id: number) => {
      this.store.dispatch(new LoadBeerDetails(id));
    });

    this.details$ = this.store.pipe(
      select('beerState'),
      map((state: BeerState) => state && state.beer)
    );

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
