import { User } from '@prisma/client'
import { ICreateUsersDTO } from '../dtos/ICreateUsersDTO'
import { IUpdatePersonalInformation } from '../dtos/IUpdatePersonalInformation'

export interface IUsersRepositories {
  findUserById (id: string): Promise<User | null>
  findUserByEmail (email: string): Promise<User | null>
  createUser (data: ICreateUsersDTO): Promise<User>
  updatePersonalInformation (data: IUpdatePersonalInformation): Promise<User>
}
