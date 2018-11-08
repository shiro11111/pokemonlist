import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {EffectsModule} from '@ngrx/effects';
import {PokemonListEffects} from './pokemon-list/pokemon-list.effects';
import {PokemonListService} from './pokemon-list/pokemon-list.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      PokemonListEffects
    ])
  ],
  providers: [PokemonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
