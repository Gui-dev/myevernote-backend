import { AppError } from '@shared/error/AppError'
import { inject, injectable } from 'tsyringe'

import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO'
import { INoteResponseDTO } from '../dtos/INoteResponseDTO'
import { INotesRepositories } from '../repositories/INotesRepositories'

@injectable()
export class CreateNotesService {
  constructor (
    @inject('NotesRepositories')
    private notesRepositories: INotesRepositories
  ) {}

  public async execute ({ user_id, title, body }: ICreateNoteDTO): Promise<INoteResponseDTO> {
    const note = await this.notesRepositories.createNote({
      user_id,
      title,
      body
    })

    if (!note) {
      throw new AppError('Error creating note')
    }

    return note
  }
}
