import { User } from '@prisma/client'
import { ICreateUsersDTO } from '../dtos/ICreateUsersDTO'
import { IUpdatePersonalInformationDTO } from '../dtos/IUpdatePersonalInformationDTO'
import { IUpdateUserPasswordDTO } from '../dtos/IUpdateUserPasswordDTO'

export interface IUsersRepositories {
  findUserById (id: string): Promise<User | null>
  findUserByEmail (email: string): Promise<User | null>
  createUser (data: ICreateUsersDTO): Promise<User>
  updatePersonalInformation (data: IUpdatePersonalInformationDTO): Promise<User>
  updateUserPassword(data: IUpdateUserPasswordDTO): Promise<User>
}
