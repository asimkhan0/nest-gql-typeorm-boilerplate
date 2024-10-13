import { InputType, Field } from '@nestjs/graphql';
import { IsDate, IsEmail, IsNotEmpty, IsString, IsOptional, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsString()
  @Length(3, 50)
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  role?: string = 'user';

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  avatar?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  birthday?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  gender?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  status?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  createdAt?: string = new Date().toISOString();

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  updatedAt?: string;
}
