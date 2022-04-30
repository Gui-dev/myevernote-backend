
export interface IBcryptHash {
  generateHash (hash: string): Promise<string>
  compareHash (password: string, hash: string): Promise<boolean>
}
