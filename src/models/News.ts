import type { Person } from "@/models/Person"
import type { ImageResponse } from "@/models/ResponseAPI"

export interface News {
	id: number
	title: string
	authors: Person[]
	image: ImageResponse
	description: string
	facebook_url: string
	instagram_url?: string
	publishedAt: Date
}
