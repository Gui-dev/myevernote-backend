import bcrypt from 'bcrypt'

import { IBcryptHash } from '../model/IBcryptHash'

export class BcryptHash implements IBcryptHash {
  public async generateHash (hash: string): Promise<string> {
    const response = bcrypt.hash(hash, 10)

    return response
  }

  public async compareHash (password: string, hash: string): Promise<boolean> {
    const response = bcrypt.compare(password, hash)

    return response
  }
}
