import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Book } from './models/book.model'
import { InputBook } from './dto/book.input'

@Resolver('Book')
export class BookResolver {
  @Query(returns => Book)
  getBook(): Book {
    const result: Book = {
      id: '1',
      name: 'BeforeSecond',
      price: 199,
    }
    return result
  }

  @Mutation(returns => Book)
  createBook(@Args('input') input: InputBook): Book {
    const result: Book = {
      id: '2',
      ...input,
    }
    return result
  }
}
