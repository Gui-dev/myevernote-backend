import { Router } from 'express'

import { UserController } from '@modules/user/infra/http/controllers/UserController'
import { ensureAuthenticate } from '@modules/user/infra/http/middlewares/ensureAuthenticate'

const usersRoutes = Router()
const userController = new UserController()

usersRoutes.post('/register', userController.create)
usersRoutes.put('/edit', ensureAuthenticate, userController.update)

export { usersRoutes }
