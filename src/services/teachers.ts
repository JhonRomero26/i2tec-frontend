import { BACKEND_URL } from "@/consts/app"
import type { ResponseAPI } from "@/models/ResponseAPI"
import type { Teacher } from "@/models/Teacher"
import { BackendError } from "@/utils/errors"
import { fetchWithTimeout } from "@/utils/fetching"
import { generateQueryURL } from "@/utils/urlUtils"

const url = `${BACKEND_URL}/api/teachers`

export async function getTeachers({
	query,
	controller = new AbortController(),
}: { query?: string[]; controller?: AbortController } = {}): Promise<ResponseAPI<Teacher[]>> {
	const q = ["populate=person.avatar"].concat(query || [])
	const URI = generateQueryURL({ url, query: q })
	const res = await fetchWithTimeout(URI, {
		signal: controller.signal,
	})

	if (!res.ok) throw new BackendError("Failed to fetch teachers")

	return (await res.json()) as ResponseAPI<Teacher[]>
}

export async function getTeacher({
	id,
	query,
	controller = new AbortController(),
}: {
	id: string
	query?: string[]
	controller?: AbortController
}): Promise<ResponseAPI<Teacher[]>> {
	const q = ["populate=person.avatar"].concat(query || [])
	const URI = generateQueryURL({ url: `${url}/${id}`, query: q })
	const res = await fetchWithTimeout(URI, {
		signal: controller.signal,
	})

	if (!res.ok) throw new BackendError("Failed to fetch teachers")

	return (await res.json()) as ResponseAPI<Teacher[]>
}
