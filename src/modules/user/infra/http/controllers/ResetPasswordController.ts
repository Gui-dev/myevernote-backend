import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateUserPasswordService } from '@modules/user/services/UpdateUserPasswordService'

export class ResetPasswordController {
  public async update (request: Request, response: Response): Promise<Response> {
    const id = request.userId
    const { password } = request.body
    const updateUserPasswordService = container.resolve(UpdateUserPasswordService)
    const user = await updateUserPasswordService.execute(id, password)

    return response.status(201).json(user)
  }
}
