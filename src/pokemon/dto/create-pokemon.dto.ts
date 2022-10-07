import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  numberPokemon: number;

  @IsString()
  @MinLength(1)
  namePokemon: string;
}
