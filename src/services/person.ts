import { fecthBackendAPI } from "@/lib/fetchBackendAPI"
import type { Person, ResponseAPI } from "@/models"

export const getPeople = async (params?: string[]): Promise<Person[]> => {
  const res = await fecthBackendAPI<Person[]>("/people", params)
  return res.data ?? [] as Person[]
}

export const getPerson = async (id: string, params?: string[]): Promise<ResponseAPI<Person>> => await fecthBackendAPI<Person>(`/people/${id}`, params)
