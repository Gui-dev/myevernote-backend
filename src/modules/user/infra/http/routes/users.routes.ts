import { Router } from 'express'

import { UserController } from '@modules/user/infra/http/controllers/UserController'

const usersRoutes = Router()
const userController = new UserController()

usersRoutes.post('/register', userController.create)

export { usersRoutes }
