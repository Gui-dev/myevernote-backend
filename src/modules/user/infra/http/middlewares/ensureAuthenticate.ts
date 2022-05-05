import { NextFunction, Request, Response } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'

import { UsersRepositories } from '@modules/user/infra/prisma/repositories/UsersRepositories'
import { authConfig } from '@config/auth'
import { AppError } from '@shared/error/AppError'

type IPayload = JwtPayload & {
  iat: string
  exp: string
  sub: string
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
    const { sub } = decoded as IPayload

    const user = await usersRepositories.findUserById(sub)

    if (!user) {
      throw new AppError('User is not authorized, token missing', 401)
    }

    request.userId = sub

    return next()
  } catch {
    throw new AppError('Invalid Token', 401)
  }
}
