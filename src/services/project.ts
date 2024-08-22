import { BACKEND_URL } from "@/consts/app"
import type { Project } from "@/models/Project"
import type { ResponseAPI } from "@/models/ResponseAPI"
import { BackendError } from "@/utils/errors"
import { generateQueryURL } from "@/utils/urlUtils"

const url = `${BACKEND_URL}/api/projects`

export async function getProjects({ query }: { query?: string[] } = {}): Promise<
	ResponseAPI<Project[]>
> {
	const q = ["populate=*"].concat(query || [])
	const res = await fetch(generateQueryURL({ url, query: q })).catch((err) => console.error(err))

	if (!res?.ok) throw new BackendError("Failed to fetch projects")

	return (await res.json()) as ResponseAPI<Project[]>
}

export async function getProject({
	slug,
	query,
}: {
	slug: string
	query?: string[]
}): Promise<Project> {
	const q = ["populate=*", `filters[slug][$eq]=${slug}`].concat(query || [])

	const res = await fetch(generateQueryURL({ url, query: q })).catch((err) => console.error(err))

	if (!res?.ok) throw new BackendError(`Failed to fetch project with slug: ${slug}`)

	const { data = [] } = (await res.json()) as ResponseAPI<Project[]>
	return data[0] || {}
}
