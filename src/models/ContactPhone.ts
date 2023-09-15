export type ContactPhone = {
  id: number
  attributes: ContactPhoneAttributes
}

export interface ContactPhoneAttributes {
  phone: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}
