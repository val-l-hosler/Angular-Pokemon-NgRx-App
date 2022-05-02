import {createReducer, on} from '@ngrx/store';
import {getPokemonInfo} from './pokemon-cards.actions';

import {PokemonCardInterface} from '../../interfaces/pokemon-card.interface';

export const initialState: ReadonlyArray<PokemonCardInterface> = []

export const PokemonCardsReducer = createReducer(
  initialState,
  on(getPokemonInfo, (state, {cardsArr}) => cardsArr)
);
