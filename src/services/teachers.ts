import { fecthBackendAPI } from "@/lib/fetchBackendAPI";
import type { Teacher, ResponseAPI } from "@/models";

export const getTeachers = async (
  params?: string[]
): Promise<ResponseAPI<Teacher[]>> =>
  await fecthBackendAPI<Teacher[]>("/teachers", params);

export const getTeacher = async (
  id: number,
  params?: string[]
): Promise<ResponseAPI<Teacher>> =>
  await fecthBackendAPI<Teacher>(`/teachers/${id}`, params);
