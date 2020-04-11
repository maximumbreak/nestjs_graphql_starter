import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputBook {
  @Field(type => String)
  name: string

  @Field(type => Number, { nullable: true })
  price?: number

  @Field(type => String, { nullable: true })
  description?: string

  @Field(type => [String])
  writer: string[]
}
