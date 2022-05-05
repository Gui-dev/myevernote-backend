import { User } from '@prisma/client'
import { ICreateUsersDTO } from '../dtos/ICreateUsersDTO'

export interface IUsersRepositories {
  findUserById (id: string): Promise<User | null>
  findUserByEmail (email: string): Promise<User | null>
  createUser (data: ICreateUsersDTO): Promise<User>
}
