import { BACKEND_URL } from "@/consts/app"
import { fetchTimeout } from "@/consts/fetching"
import type { News } from "@/models/News"
import type { ResponseAPI } from "@/models/ResponseAPI"
import { BackendError } from "@/utils/errors"
import { generateQueryURL } from "@/utils/urlUtils"

const url = `${BACKEND_URL}/api/tidings`

export async function getTidings({ query }: { query?: string[] } = {}): Promise<
	ResponseAPI<News[]>
> {
	const controller = new AbortController()
	const { signal } = controller
	setTimeout(() => controller.abort(), fetchTimeout)

	const q = ["populate=*"].concat(query || [])
	const res = await fetch(generateQueryURL({ url, query: q }), { signal }).catch((err) => {
		controller.abort()
		console.error(err)
	})

	if (!res?.ok) throw new BackendError("Failed to fetch newa")

	return (await res.json()) as ResponseAPI<News[]>
}
