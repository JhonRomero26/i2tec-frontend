import { fecthBackendAPI } from "@/lib/fetchBackendAPI"
import type { Teacher, ResponseAPI } from "@/models";

export const getTeachers = async (params?: string[]): Promise<ResponseAPI<Teacher[]>> => await fecthBackendAPI<Teacher[]>('/api/teachers', params)

export const getTeacher = async (id: string, params?: string[]): Promise<ResponseAPI<Teacher>> => await fecthBackendAPI<Teacher>(`/api/teachers/${id}`, params)
