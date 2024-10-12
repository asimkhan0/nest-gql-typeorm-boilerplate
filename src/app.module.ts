import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // auto-generating schema
    playground: true,
  })],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
