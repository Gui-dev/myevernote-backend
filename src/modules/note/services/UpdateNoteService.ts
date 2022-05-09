import { inject, injectable } from 'tsyringe'

import { IUpdateNoteDTO } from '../dtos/IUpdateNoteDTO'
import { INotesRepositories } from '../repositories/INotesRepositories'
import { INoteResponseDTO } from '../dtos/INoteResponseDTO'
import { AppError } from '@shared/error/AppError'

@injectable()
export class UpdateNoteService {
  constructor (
    @inject('NotesRepositories')
    private notesRepositories: INotesRepositories
  ) {}

  public async execute ({ id, title, body }: IUpdateNoteDTO, user_id: string): Promise<INoteResponseDTO> {
    const noteExists = await this.notesRepositories.lookingNoteById(id)

    if (!noteExists) {
      throw new AppError('Error, note not found', 404)
    }

    if (noteExists.author.id !== user_id) {
      throw new AppError('Permission denied to access this file', 403)
    }

    const note = await this.notesRepositories.updateNoteById({
      id: noteExists.id,
      title,
      body
    })

    return note
  }
}
