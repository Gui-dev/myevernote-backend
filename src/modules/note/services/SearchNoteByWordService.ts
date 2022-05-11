import { inject, injectable } from 'tsyringe'

import { INotesRepositories } from '../repositories/INotesRepositories'
import { INoteResponseDTO } from '../dtos/INoteResponseDTO'
import { AppError } from '@shared/error/AppError'

@injectable()
export class SearchNoteByWordService {
  constructor (
    @inject('NotesRepositories')
    private notesRepositories: INotesRepositories
  ) {}

  public async execute (word: string, user_id: string): Promise<INoteResponseDTO[]> {
    const notes = await this.notesRepositories.searchNoteByWord(word, user_id)
    console.log('SEARCH')
    if (!notes) {
      throw new AppError('Error, note not found', 404)
    }

    return notes
  }
}
