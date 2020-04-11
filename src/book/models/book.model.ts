import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Book {
  @Field(type => ID)
  id: string

  @Field(type => String, { nullable: true })
  name?: string

  @Field(type => String, { nullable: true })
  description?: string

  @Field(type => Number, { nullable: true })
  price?: number

  @Field(type => [String], { nullable: true })
  writer?: string[]
}
