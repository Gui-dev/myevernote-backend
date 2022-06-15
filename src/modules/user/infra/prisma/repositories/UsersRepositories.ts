import { User } from '@prisma/client'

import { IUsersRepositories } from '@modules/user/repositories/IUsersRepositories'
import { prismaClient } from '@shared/prisma'
import { ICreateUsersDTO } from '@modules/user/dtos/ICreateUsersDTO'
import { IUpdatePersonalInformationDTO } from '@modules/user/dtos/IUpdatePersonalInformationDTO'
import { IUpdateUserPasswordDTO } from '@modules/user/dtos/IUpdateUserPasswordDTO'

export class UsersRepositories implements IUsersRepositories {
  public async findUserById (id: string): Promise<User | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        id
      }
    })

    return user
  }
  public async findUserByEmail (email: string): Promise<User | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        email
      }
    })

    return user
  }

  public async createUser ({ name, email, password }: ICreateUsersDTO): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return user
  }

  public async updatePersonalInformation ({ id, name, email }: IUpdatePersonalInformationDTO): Promise<User> {
    const user = await prismaClient.user.update({
      where: {
        id
      },
      data: {
        name,
        email
      }
    })

    return user
  }

  public async updateUserPassword ({ id, password }: IUpdateUserPasswordDTO): Promise<User> {
    const user = await prismaClient.user.update({
      where: {
        id
      },
      data: {
        password
      }
    })

    return user
  }
}
