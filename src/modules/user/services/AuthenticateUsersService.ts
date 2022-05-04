import { inject, injectable } from 'tsyringe'
import jwt from 'jsonwebtoken'

import { IBcryptHash } from '../providers/encrypt/bcryptHash/model/IBcryptHash'
import { IUsersRepositories } from '../repositories/IUsersRepositories'
import { AppError } from '@shared/error/AppError'
import { UserViewProps, userView } from '@modules/user/infra/http/views/UserView'
import { authConfig } from '@config/auth'

type ResponseProps = {
  user: UserViewProps
  token: string
}

@injectable()
export class AuthenticateUsersService {
  constructor (
    @inject('UsersRepositories')
    private usersRepositories: IUsersRepositories,
    @inject('BcryptHash')
    private bcryptHash: IBcryptHash
  ) {}

  public async execute (email: string, password: string): Promise<ResponseProps> {
    const user = await this.usersRepositories.findUserByEmail(email)

    if (!user) {
      throw new AppError('User or password invalid', 401)
    }

    const checkPassword = await this.bcryptHash.compareHash(password, user.password)

    if (!checkPassword) {
      throw new AppError('User or password invalid', 401)
    }

    // Gerar token
    const token = jwt.sign({ id: user.id }, authConfig.SECRET, {
      expiresIn: authConfig.EXPIRES_IN
    })

    const userResponse = await userView(user)

    return {
      user: userResponse,
      token
    }
  }
}
