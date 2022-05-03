import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserService } from '@modules/user/services/CreateUsersService'

export class UserController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    const createUsersService = container.resolve(CreateUserService)
    const user = await createUsersService.execute({
      name,
      email,
      password
    })

    return response.status(201).json(user)
  }
}
