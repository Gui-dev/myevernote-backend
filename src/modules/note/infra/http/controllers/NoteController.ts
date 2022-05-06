import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateNotesService } from '@modules/note/services/CreateNotesService'

export class NoteController {
  public async create (request: Request, response: Response): Promise<Response> {
    const user_id = request.userId
    const { title, body } = request.body
    const createNotesService = container.resolve(CreateNotesService)
    const note = await createNotesService.execute({
      user_id,
      title,
      body
    })

    return response.status(201).json(note)
  }
}
