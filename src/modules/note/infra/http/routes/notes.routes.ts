import { Router } from 'express'

import { NoteController } from '@modules/note/infra/http/controllers/NoteController'
import { ensureAuthenticate } from '@modules/user/infra/http/middlewares/ensureAuthenticate'

const notesRouter = Router()
const noteController = new NoteController()

notesRouter.post('/', ensureAuthenticate, noteController.create)
notesRouter.get('/:id', ensureAuthenticate, noteController.show)

export { notesRouter }
