import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO'
import { INoteResponseDTO } from '../dtos/INoteResponseDTO'
import { IUpdateNoteDTO } from '../dtos/IUpdateNoteDTO'

export interface INotesRepositories {
  createNote (data: ICreateNoteDTO): Promise<INoteResponseDTO>
  lookingNoteById(id: string): Promise<INoteResponseDTO | null>
  listAllNotes(user_id: string): Promise<INoteResponseDTO[] | null>
  updateNoteById(data: IUpdateNoteDTO): Promise<INoteResponseDTO>
  deleteNoteById(id: string): Promise<void>
  searchNoteByWord(word: string, user_id: string): Promise<INoteResponseDTO[] | null>
}
