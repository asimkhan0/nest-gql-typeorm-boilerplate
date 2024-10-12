import { Field } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @Field(() => String)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  role: string;

  @Field(() => String)
  @Column()
  avatar: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  birthday: string;

  @Field(() => String)
  @Column()
  gender: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  status: string;

  @Field(() => String)
  @Column()
  createdAt: string;

  @Field(() => String)
  @Column()
  updatedAt: string;

  @Field(() => String)
  @Column()
  deletedAt: string;
}