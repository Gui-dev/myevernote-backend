import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AuthenticateUsersService } from '@modules/user/services/AuthenticateUsersService'

export class SessionController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const autheticateUsersService = container.resolve(AuthenticateUsersService)
    const user = await autheticateUsersService.execute(email, password)

    return response.status(201).json(user)
  }
}
