import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateNotesService } from '@modules/note/services/CreateNotesService'
import { LookingNoteByIdService } from '@modules/note/services/LookingNoteByIdService'
import { ListNotesService } from '@modules/note/services/ListNotesService'
import { UpdateNoteService } from '@modules/note/services/UpdateNoteService'
import { DeleteNoteService } from '@modules/note/services/DeleteNoteService'

export class NoteController {
  public async index (request: Request, response: Response): Promise<Response> {
    const user_id = request.userId
    const listNotesService = container.resolve(ListNotesService)
    const notes = await listNotesService.execute(user_id)

    return response.status(201).json(notes)
  }

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

  public async update (request: Request, response: Response): Promise<Response> {
    const user_id = request.userId
    const { id } = request.params
    const { title, body } = request.body
    const updateNoteService = container.resolve(UpdateNoteService)
    const note = await updateNoteService.execute(
      {
        id,
        title,
        body
      },
      user_id
    )

    return response.status(201).json(note)
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    const user_id = request.userId
    const { id } = request.params
    const deleteNoteService = container.resolve(DeleteNoteService)
    await deleteNoteService.execute(id, user_id)

    return response.status(204).send()
  }
}
