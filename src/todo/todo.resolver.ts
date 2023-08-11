import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodoResolver {
  private todos = []; // Your in-memory todos array

  @Query(() => [String])
  async getAllTodos() {
    return this.todos;
  }
}
