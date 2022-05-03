import 'reflect-metadata'
import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'

import { AppError } from '@shared/error/AppError'
import '@shared/container'

import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      error: err.message
    })
  }
  console.log(err)

  return response.status(500).json({
    status: 'error',
    error: 'Internal Server Error'
  })
})

export {
  app
}
