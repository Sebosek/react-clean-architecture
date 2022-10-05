import {Pokemon} from "../types/pokemon";
import {PokemonDetails} from "../types/pokemon-details";

const PICTURES = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

export class PokemonService {
  public async fetch(): Promise<Array<Pokemon>> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    if (!response.ok) {
      throw new Error('Unable to load Pokémons!');
    }

    const data = await response.json();
    return data.results.map(({name}: any, i: number) => ({id: i + 1, name}));
  }

  public async read(id: number): Promise<PokemonDetails> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if (!response.ok) {
      throw new Error('Unable to load Pokémon!');
    }

    const {name} = await response.json();
    const image = `${PICTURES}/official-artwork/${id}.png`;
    return {id, name, image};
  }
}