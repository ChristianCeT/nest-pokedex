import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';

@Injectable()
export class SeedService {
  private baseURL: string = 'https://pokeapi.co/api/v2/pokemon?limit=650';

  constructor(
    private readonly httpService: HttpService,
    private readonly pokemonService: PokemonService,
  ) {}

  /* git checkout -- . */

  async executeSeed() {
    const { data } = await this.httpService.axiosRef.get<PokeResponse>(
      this.baseURL,
    );

    let dataSending: { namePokemon: string; numberPokemon: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      dataSending.push({ namePokemon: name, numberPokemon: no });
    });

    return this.pokemonService.fillPokemonWithSeed(dataSending);
  }
}
