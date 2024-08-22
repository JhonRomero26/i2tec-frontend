import type { Person } from "@/models/Person"

export interface Teacher {
	id: number
	person: Person
	biography: string
}
