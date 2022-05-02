import {PokemonCardInterface} from '../interfaces/pokemon-card.interface';

export interface AppSate {
  cards: ReadonlyArray<PokemonCardInterface>;
}
