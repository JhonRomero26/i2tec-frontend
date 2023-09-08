import type { Person } from "@/models"

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
  person?: { data: Person }
}
