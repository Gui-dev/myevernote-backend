import { Router } from 'express'

import { UserController } from '@modules/user/infra/http/controllers/UserController'
import { ResetPasswordController } from '@modules/user/infra/http/controllers/ResetPasswordController'
import { ensureAuthenticate } from '@modules/user/infra/http/middlewares/ensureAuthenticate'

const usersRoutes = Router()
const userController = new UserController()
const resetPasswordController = new ResetPasswordController()

usersRoutes.post('/register', userController.create)
usersRoutes.put('/edit', ensureAuthenticate, userController.update)
usersRoutes.put('/reset_password', ensureAuthenticate, resetPasswordController.update)

export { usersRoutes }
