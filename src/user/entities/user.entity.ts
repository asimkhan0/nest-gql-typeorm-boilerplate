import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

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
  @Column({ default: 'user' })
  role: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  address?: string;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  birthday?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  gender?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  status?: string;

  @Field(() => Date, { defaultValue: new Date() })
  @Column({ name: 'created_at' })
  createdAt: string;

  @Field(() => Date, { nullable: true })
  @Column({ name: 'updated_at', nullable: true })
  updatedAt?: string;

  @Field(() => String)
  @Column({ name: 'deleted_at', nullable: true })
  deletedAt?: string;
}