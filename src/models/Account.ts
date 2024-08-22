import type { Person } from "@/models/Person"

export interface Account {
	username: string
	email: string
	provider: string
	password: string
	resetPasswordToken: string
	confirmationToken: string
	confirmed: boolean
	blocked: boolean
	role?: string
	person?: Person
}
