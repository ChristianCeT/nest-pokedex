import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
/* extenderlo de document agrega metodos y funcionalides */

@Schema()
export class Pokemon extends Document {
  /* Sirve para establecer propiedades con este decorador a los valores */
  @Prop({
    unique: true,
    index: true,
  })
  namePokemon: string;

  @Prop({
    unique: true,
    index: true,
  })
  numberPokemon: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
