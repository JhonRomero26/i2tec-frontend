import type { Account } from "@/models/Account"
import type { Degree } from "@/models/Degree"
import type { Project } from "@/models/Project"
import type { ImageResponse } from "@/models/ResponseAPI"

export interface Person {
	id: number
	account?: Account
	avatar?: ImageResponse
	createdAt: Date
	first_name: string
	founder: boolean
	last_name: string
	projects?: Project[]
	teacher: boolean
	prefix_titles?: Degree[]
	suffix_titles?: Degree[]
	publishedAt: Date
	updatedAt: Date
}
