import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

//PartialType: tiene todas las propiedades de CreatePokemonDto con la excepción que las propiedades son opcionales
export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
