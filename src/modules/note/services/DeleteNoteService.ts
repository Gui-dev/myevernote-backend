import { inject, injectable } from 'tsyringe'

import { INotesRepositories } from '../repositories/INotesRepositories'
import { AppError } from '@shared/error/AppError'

@injectable()
export class DeleteNoteService {
  constructor (
    @inject('NotesRepositories')
    private notesRepositories: INotesRepositories
  ) {}

  public async execute (id: string, user_id: string): Promise<void> {
    const note = await this.notesRepositories.lookingNoteById(id)

    if (!note) {
      throw new AppError('Error, note not found', 404)
    }

    if (note.author.id !== user_id) {
      throw new AppError('Permission denied to access this file', 403)
    }

    await this.notesRepositories.deleteNoteById(note.id)
  }
}
