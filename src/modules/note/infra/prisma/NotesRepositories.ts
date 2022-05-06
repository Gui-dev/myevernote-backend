import { INotesRepositories } from '@modules/note/repositories/INotesRepositories'
import { ICreateNoteDTO } from '@modules/note/dtos/ICreateNoteDTO'
import { prismaClient } from '@shared/prisma'
import { INoteResponseDTO } from '@modules/note/dtos/INoteResponseDTO'

export class NotesRepositories implements INotesRepositories {
  public async createNote ({ user_id, title, body }: ICreateNoteDTO): Promise<INoteResponseDTO> {
    const note = await prismaClient.note.create({
      data: {
        title,
        body,
        user_id
      },
      select: {
        id: true,
        title: true,
        body: true,
        created_at: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            created_at: true
          }
        }
      }
    })

    return note
  }
}
