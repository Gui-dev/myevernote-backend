import { inject, injectable } from 'tsyringe'

import { IUsersRepositories } from '../repositories/IUsersRepositories'
import { IUpdatePersonalInformationDTO } from '../dtos/IUpdatePersonalInformationDTO'
import { AppError } from '@shared/error/AppError'
import { userView, UserViewProps } from '../infra/http/views/UserView'

@injectable()
export class UpdatePersonalInformationService {
  constructor (
    @inject('UsersRepositories')
    private usersRepositories: IUsersRepositories
  ) {}

  public async execute ({ id, name, email }: IUpdatePersonalInformationDTO): Promise<UserViewProps> {
    const usersExists = await this.usersRepositories.findUserById(id)

    if (!usersExists) {
      throw new AppError('User not found', 401)
    }

    const user = await this.usersRepositories.updatePersonalInformation({
      id,
      name,
      email
    })

    const userFormatted = await userView(user)

    return userFormatted
  }
}
