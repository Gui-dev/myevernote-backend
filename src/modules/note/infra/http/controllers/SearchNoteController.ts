import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { SearchNoteByWordService } from '@modules/note/services/SearchNoteByWordService'

export class SearchNoteController {
  public async index (request: Request, response: Response): Promise<Response> {
    const user_id = request.userId
    const { query } = request.query
    const searchNoteByWordService = container.resolve(SearchNoteByWordService)
    const notes = await searchNoteByWordService.execute(String(query), user_id)

    return response.status(201).json(notes)
  }
}
