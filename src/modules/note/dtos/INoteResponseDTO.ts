export interface INoteResponseDTO {
  id: string
  title: string
  body: string
  created_at: Date
  author: {
    id: string
    name: string
    email: string
    created_at: Date
  }
}
