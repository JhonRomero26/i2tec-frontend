export type SocialNetwork = {
  id: number
  attributes: SocialNetworkAttributes
}

export interface SocialNetworkAttributes {
  title: string
  url: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}
