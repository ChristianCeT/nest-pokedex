import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private baseURL: string = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private readonly httpService: HttpService) {}

  /* git checkout -- . */

  async executeSeed() {
    const { data } = await this.httpService.axiosRef.get<PokeResponse>(
      this.baseURL,
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
    });
    return data.results;
  }
}
