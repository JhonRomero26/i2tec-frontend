import { BACKEND_URL } from "@/consts/app"
import type { Project } from "@/models/Project"
import type { ResponseAPI } from "@/models/ResponseAPI"
import { BackendError } from "@/utils/errors"
import { fetchWithTimeout } from "@/utils/fetching"
import { generateQueryURL } from "@/utils/urlUtils"

const url = `${BACKEND_URL}/api/projects`

export async function getProjects({
	query,
	controller = new AbortController(),
}: { query?: string[]; controller?: AbortController } = {}): Promise<ResponseAPI<Project[]>> {
	const q = ["populate=*"].concat(query || [])
	const URI = generateQueryURL({ url, query: q })
	const res = await fetchWithTimeout(URI, {
		signal: controller.signal,
	})

	if (!res.ok) throw new BackendError("Failed to fetch projects")

	return (await res.json()) as ResponseAPI<Project[]>
}

export async function getProject({
	slug,
	query,
	controller = new AbortController(),
}: {
	slug: string
	query?: string[]
	controller?: AbortController
}): Promise<Project> {
	const q = ["populate=*", `filters[slug][$eq]=${slug}`].concat(query || [])

	const URI = generateQueryURL({ url, query: q })
	const res = await fetchWithTimeout(URI, {
		signal: controller.signal,
	})

	if (!res.ok) throw new BackendError(`Failed to fetch project with slug: ${slug}`)

	const { data = [] } = (await res.json()) as ResponseAPI<Project[]>
	return data[0] || {}
}
