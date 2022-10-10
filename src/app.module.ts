import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    /* Sirve para tener un sitio estático en la carpeta public */
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    /* Conexión a la base de datos */
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    PokemonModule,

    CommonModule,
  ],
})
export class AppModule {}
