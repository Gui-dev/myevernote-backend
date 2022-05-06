import { Router } from 'express'

import { usersRoutes } from '@modules/user/infra/http/routes/users.routes'
import { sessionsRoutes } from '@modules/user/infra/http/routes/sessions.routes'
import { notesRouter } from '@modules/note/infra/http/routes/notes.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/users', sessionsRoutes)

routes.use('/notes', notesRouter)

export {
  routes
}
