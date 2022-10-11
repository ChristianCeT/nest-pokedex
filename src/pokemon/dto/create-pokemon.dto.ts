import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsNumber()
  @IsPositive()
  @Min(1)
  numberPokemon: number;

  @IsString()
  @IsNumber()
  @MinLength(1)
  namePokemon: string;
}
