import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateNotesService } from '@modules/note/services/CreateNotesService'
import { LookingNoteByIdService } from '@modules/note/services/LookingNoteByIdService'

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

  public async show (request: Request, response: Response): Promise<Response> {
    const user_id = request.userId
    const { id } = request.params
    const lookingNoteByIdService = container.resolve(LookingNoteByIdService)
    const note = await lookingNoteByIdService.execute(id, user_id)

    return response.status(201).json(note)
  }
}
