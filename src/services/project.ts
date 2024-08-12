import { fecthBackendAPI } from "@/lib/fetchBackendAPI"
import type { ResponseAPI } from "@/models"
import type { Project } from "@/models/Project"

export const getProjects = async ({ params = [] }: { params?: string[] } = {}): Promise<ResponseAPI<Project[]>> => await fecthBackendAPI<Project[]>("/projects", params.concat("populate=*"))

export const getProject = async ({
  slug
}: { slug: string }): Promise<Project> => {
  const queryParams = [`filters[slug][$eq]=${slug}`]
  const res = await getProjects({ params: queryParams })
  return res.data![0]
}
