import { NextFunction, Request, Response } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'

import { UsersRepositories } from '@modules/user/infra/prisma/repositories/UsersRepositories'
import { authConfig } from '@config/auth'
import { AppError } from '@shared/error/AppError'

type IPayload = JwtPayload & {
  iat: string
  id: string
  exp: string
}

export const ensureAuthenticate = async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization
  const usersRepositories = new UsersRepositories()

  if (!authHeader) {
    throw new AppError('User is not authorized, token missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.SECRET)
    const { id } = decoded as IPayload

    const user = await usersRepositories.findUserById(id)

    if (!user) {
      throw new AppError('User is not authorized, token missing', 401)
    }

    request.userId = id

    return next()
  } catch {
    throw new AppError('Invalid Token', 401)
  }
}
