import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from './app.reducers';
import {Store} from '@ngrx/store';
import {SetToolBarContentAction} from './toolbar/toolbar.actions';
import {ToolbarState} from './toolbar/toolbar.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toolBarContent$: Observable<string>;
  title = 'pokemon';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.toolBarContent$ = this.store.select('toolBarState').pipe(
      map((state: ToolbarState) => state && state.content)
    );
    this.store.dispatch(new SetToolBarContentAction('Wybierz coś z menu'));
  }
}
