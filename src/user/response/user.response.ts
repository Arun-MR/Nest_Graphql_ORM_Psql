import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  password: string;
}
