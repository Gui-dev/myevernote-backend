import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO'
import { INoteResponseDTO } from '../dtos/INoteResponseDTO'

export interface INotesRepositories {
  createNote (data: ICreateNoteDTO): Promise<INoteResponseDTO>
}