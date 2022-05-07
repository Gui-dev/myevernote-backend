import { inject, injectable } from 'tsyringe'

import { INoteResponseDTO } from '../dtos/INoteResponseDTO'
import { INotesRepositories } from '../repositories/INotesRepositories'
import { AppError } from '@shared/error/AppError'

@injectable()
export class ListNotesService {
  constructor (
    @inject('NotesRepositories')
    private notesRepositories: INotesRepositories
  ) {}

  public async execute (user_id: string): Promise<INoteResponseDTO[]> {
    const notes = await this.notesRepositories.listAllNotes(user_id)

    if (!notes) {
      throw new AppError('Error, notes not found', 404)
    }

    return notes
  }
}
