import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { BookModule } from './book/book.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true,
    }),
    BookModule,
  ],
})
export class AppModule {}
