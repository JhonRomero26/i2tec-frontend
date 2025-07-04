import { BACKEND_URL } from "@/consts/app"
import type { Person } from "@/models/Person"
import type { ResponseAPI } from "@/models/ResponseAPI"
import { BackendError } from "@/utils/errors"
import { fetchWithTimeout } from "@/utils/fetching"
import { generateQueryURL } from "@/utils/urlUtils"

const url = `${BACKEND_URL}/api/people`

export async function getPeople({
	query,
	controller = new AbortController(),
}: { query?: string[]; controller?: AbortController } = {}): Promise<ResponseAPI<Person[]>> {
	const q = ["populate=*"].concat(query || [])
	const URI = generateQueryURL({ url, query: q })
	const res = await fetchWithTimeout(URI, {
		signal: controller.signal,
	})

	if (!res.ok) throw new BackendError("Failed to fetch people")

	return (await res.json()) as ResponseAPI<Person[]>
}
