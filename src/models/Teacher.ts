import type { Person } from "@/models"

export interface Teacher {
  id: number
  person: Person
  biography: string
}