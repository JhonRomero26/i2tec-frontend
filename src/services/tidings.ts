import { BACKEND_URL } from "@/consts/app"
import type { News } from "@/models/News"
import type { ResponseAPI } from "@/models/ResponseAPI"
import { BackendError } from "@/utils/errors"
import { fetchWithTimeout } from "@/utils/fetching"
import { generateQueryURL } from "@/utils/urlUtils"

const url = `${BACKEND_URL}/api/tidings`

export async function getTidings({
	query,
	controller = new AbortController(),
}: { query?: string[]; controller?: AbortController } = {}): Promise<ResponseAPI<News[]>> {
	const q = ["populate=*"].concat(query || [])
	const URI = generateQueryURL({ url, query: q })
	const res = await fetchWithTimeout(URI, {
		signal: controller.signal,
	})

	if (!res.ok) throw new BackendError("Failed to fetch news")

	return (await res.json()) as ResponseAPI<News[]>
}
