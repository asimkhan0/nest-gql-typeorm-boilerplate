import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  message(): string {
    return 'Hello World!';
  }
}