import { User } from '@prisma/client'

export type UserViewProps = {
  id: string
  name: string
  email: string
  created_at: Date
}

export const userView = async (user: User): Promise<UserViewProps> => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at
  }
}
