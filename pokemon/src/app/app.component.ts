import {Component} from '@angular/core';

import {PokemonCardsService} from './services/pokemon-cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';

  constructor(private pokemonCardsService: PokemonCardsService) {
    this.pokemonCardsService.getPokemonInfo().subscribe(responses => {
      console.log(responses, 'responses');
    });
  }
}
