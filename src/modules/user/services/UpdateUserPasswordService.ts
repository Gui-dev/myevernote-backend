import { inject, injectable } from 'tsyringe'

import { IUsersRepositories } from '../repositories/IUsersRepositories'
import { IBcryptHash } from '../providers/encrypt/bcryptHash/model/IBcryptHash'
import { AppError } from '@shared/error/AppError'
import { userView, UserViewProps } from '../infra/http/views/UserView'

@injectable()
export class UpdateUserPasswordService {
  constructor (
    @inject('UsersRepositories')
    private usersRepositories: IUsersRepositories,
    @inject('BcryptHash')
    private bcryptHash: IBcryptHash
  ) {}

  public async execute (id: string, password: string): Promise<UserViewProps> {
    const userExists = await this.usersRepositories.findUserById(id)

    if (!userExists) {
      throw new AppError('User not found', 401)
    }

    const passwordHash = await this.bcryptHash.generateHash(password)

    const user = await this.usersRepositories.updateUserPassword({
      id,
      password: passwordHash
    })

    const userFormatted = await userView(user)

    return userFormatted
  }
}
