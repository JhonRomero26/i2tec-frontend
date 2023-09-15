import { fecthBackendAPI } from "@/lib/fetchBackendAPI"
import type { ResponseAPI } from "@/models";
import type { Project } from "@/models/Project"

export const getProjects = async (params?: string[]): Promise<ResponseAPI<Project[]>> => await fecthBackendAPI<Project[]>('/projects', params)

export const getProject = async (id: string, params?: string[]): Promise<ResponseAPI<Project>> => await fecthBackendAPI<Project>(`/projects/${id}`, params)
