import { container } from 'tsyringe'

import { INotesRepositories } from '@modules/note/repositories/INotesRepositories'
import { NotesRepositories } from '@modules/note/infra/prisma/NotesRepositories'

container.registerSingleton<INotesRepositories>('NotesRepositories', NotesRepositories)
