export interface PokemonCardInterface {
  name: string;
  id: number;
  evolvesFromSpecies: {
    name: string,
    url: string
  };
  img: string;
}
