import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    return this.userRepository.save(createUserInput);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({where: { id }})
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userRepository.findOne({where: { id }})
    const newUser = Object.assign(user, updateUserInput)

    return this.userRepository.save(newUser)
  }

  async remove(id: number) {
    const result = await this.userRepository.delete(id)
    if (result.affected === 0) {
      throw new Error('User not found')
    }
  }
}
