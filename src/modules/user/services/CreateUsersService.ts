import { inject, injectable } from 'tsyringe'

import { ICreateUsersDTO } from '@modules/user/dtos/ICreateUsersDTO'
import { IUsersRepositories } from '../repositories/IUsersRepositories'
import { IBcryptHash } from '../providers/encrypt/bcryptHash/model/IBcryptHash'
import { UserViewProps, userView } from '@modules/user/infra/http/views/UserView'
import { AppError } from '@shared/error/AppError'

@injectable()
export class CreateUserService {
  constructor (
    @inject('UsersRepositories')
    private usersRepositories: IUsersRepositories,
    @inject('BcryptHash')
    private bcryptHash: IBcryptHash
  ) {}

  public async execute ({ name, email, password }: ICreateUsersDTO): Promise<UserViewProps> {
    const usersAlreadyExists = await this.usersRepositories.findUserByEmail(email)

    if (usersAlreadyExists) {
      throw new AppError('User already exists')
    }

    const passwordHash = await this.bcryptHash.generateHash(password)

    const user = await this.usersRepositories.createUser({
      name,
      email,
      password: passwordHash
    })

    const userFormatted = await userView(user)

    return userFormatted
  }
}
