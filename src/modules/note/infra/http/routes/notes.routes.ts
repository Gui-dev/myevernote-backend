import { Router } from 'express'

import { NoteController } from '@modules/note/infra/http/controllers/NoteController'
import { SearchNoteController } from '@modules/note/infra/http/controllers/SearchNoteController'
import { ensureAuthenticate } from '@modules/user/infra/http/middlewares/ensureAuthenticate'

const notesRouter = Router()
const noteController = new NoteController()
const searchNoteController = new SearchNoteController()

notesRouter.post('/', ensureAuthenticate, noteController.create)
notesRouter.get('/', ensureAuthenticate, noteController.index)
notesRouter.get('/search', ensureAuthenticate, searchNoteController.index)
notesRouter.get('/:id', ensureAuthenticate, noteController.show)
notesRouter.put('/:id', ensureAuthenticate, noteController.update)
notesRouter.delete('/:id', ensureAuthenticate, noteController.delete)

export { notesRouter }
