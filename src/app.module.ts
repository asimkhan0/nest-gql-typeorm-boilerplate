import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMOptions } from './typeorm/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMOptions),
    GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'), // auto-generating schema
    buildSchemaOptions: { dateScalarMode: 'timestamp' },
    playground: true,
  })],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
