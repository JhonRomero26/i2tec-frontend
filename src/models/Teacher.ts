import type { Person } from "@/models"

export interface Teacher {
  id: number
  attributes: TeacherAttributes
}

export interface TeacherAttributes {
  person: { data: Person }
  biography: string
}