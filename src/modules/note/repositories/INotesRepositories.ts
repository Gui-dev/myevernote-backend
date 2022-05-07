import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO'
import { INoteResponseDTO } from '../dtos/INoteResponseDTO'

export interface INotesRepositories {
  createNote (data: ICreateNoteDTO): Promise<INoteResponseDTO>
  lookingNoteById(id: string): Promise<INoteResponseDTO | null>
  listAllNotes(user_id: string): Promise<INoteResponseDTO[] | null>
}
