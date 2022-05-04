import { Router } from 'express'

import { SessionController } from '@modules/user/infra/http/controllers/SessionController'

const sessionsRoutes = Router()
const sessionController = new SessionController()

sessionsRoutes.post('/login', sessionController.create)

export { sessionsRoutes }
