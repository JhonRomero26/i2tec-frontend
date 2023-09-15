export type ContactEmail = {
  id: number
  attributes: ContactEmailAttributes
}

export interface ContactEmailAttributes {
  email: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}
