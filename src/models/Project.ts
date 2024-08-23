import type { Category } from "@/models/Category"
import type { Person } from "@/models/Person"
import type { ImageResponse } from "@/models/ResponseAPI"

export interface Project {
	id: number
	image?: ImageResponse
	publishedAt: Date
	slug: string
	title: string
	popular: boolean
	excerpt: string
	authors?: Person[]
	repositoryURL?: string
	content: string
	categories?: Category[]
	createdAt: Date
	updatedAt: Date
}
