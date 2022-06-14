import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserService } from '@modules/user/services/CreateUsersService'
import { UpdatePersonalInformationService } from '@modules/user/services/UpdatePersonalInformationService'

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

  public async update (request: Request, response: Response): Promise<Response> {
    const id = request.userId
    const { name, email } = request.body
    const updatePersonalInformationService = container.resolve(UpdatePersonalInformationService)
    const user = await updatePersonalInformationService.execute({
      id,
      name,
      email
    })
    return response.status(201).json(user)
  }
}
