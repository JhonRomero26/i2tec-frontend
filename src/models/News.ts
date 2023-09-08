import type { Person, ImageResponse } from "@/models"

export interface News {
  id: number
  attributes: NewsAttributes
}

export interface NewsAttributes {
  title: string
  authors: { data: Person[] }
  image: ImageResponse
  description: string
  facebook_url: string
  instagram_url?: string
  publishedAt: Date;
}