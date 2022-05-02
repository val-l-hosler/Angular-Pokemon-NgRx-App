import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {PokemonCardsService} from '../../services/pokemon-cards.service';

@Injectable()
export class PokemonCardsEffects {

  // getPokemonInfo$ = createEffect(() => this.actions$.pipe(
  //   ofType('[Pokemon Card API] Retrieve Pokemon Info Success'),
  // );

  constructor(
    private actions$: Actions,
    private pokemonCardsService: PokemonCardsService
  ) {
  }
}
