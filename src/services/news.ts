import { fecthBackendAPI } from "@/lib/fetchBackendAPI"
import type { News, ResponseAPI } from "@/models"

export const getTidings = async (
  params?: string[]
): Promise<ResponseAPI<News[]>> =>
  await fecthBackendAPI<News[]>("/tidings", params)

export const getNews = async (
  id: string,
  params?: string[]
): Promise<ResponseAPI<News>> =>
  await fecthBackendAPI<News>(`/tidings/${id}`, params)
