import { container } from 'tsyringe'

import { IUsersRepositories } from '@modules/user/repositories/IUsersRepositories'
import { UsersRepositories } from '@modules/user/infra/prisma/repositories/UsersRepositories'

import { IBcryptHash } from '@modules/user/providers/encrypt/bcryptHash/model/IBcryptHash'
import { BcryptHash } from '@modules/user/providers/encrypt/bcryptHash/implementations/BcryptHash'

container.registerSingleton<IUsersRepositories>('UsersRepositories', UsersRepositories)
container.registerSingleton<IBcryptHash>('UsersRepositories', BcryptHash)
