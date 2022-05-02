import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {pokemonCardsReducer} from './state/pokemon-cards.reducer';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card-list/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cards: pokemonCardsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
