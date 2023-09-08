import { fecthBackendAPI } from "@/lib/fetchBackendAPI"
import type { Person, ResponseAPI } from "@/models";

export const getPeople = async (params?: string[]): Promise<ResponseAPI<Person[]>> => await fecthBackendAPI<Person[]>('/api/people', params)

export const getPerson = async (id: string, params?: string[]): Promise<ResponseAPI<Person>> => await fecthBackendAPI<Person>(`/api/people/${id}`, params)
