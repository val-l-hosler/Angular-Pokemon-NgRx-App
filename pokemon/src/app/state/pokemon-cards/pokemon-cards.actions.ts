import {createAction, props} from '@ngrx/store';
import {PokemonCardInterface} from '../../interfaces/pokemon-card.interface';

export const getPokemonInfo = createAction(
  '[Pokemon Card API] Retrieve Pokemon Info Success',
  props<{ cardsArr: ReadonlyArray<PokemonCardInterface> }>()
);

