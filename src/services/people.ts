import { BACKEND_URL } from "@/consts/app"
import type { Person } from "@/models/Person"
import type { ResponseAPI } from "@/models/ResponseAPI"
import { BackendError } from "@/utils/errors"
import { generateQueryURL } from "@/utils/urlUtils"

const url = `${BACKEND_URL}/api/people`

export async function getPeople({ query }: { query?: string[] } = {}): Promise<
	ResponseAPI<Person[]>
> {
	const q = ["populate=*"].concat(query || [])
	const res = await fetch(generateQueryURL({ url, query: q })).catch((err) => console.error(err))

	if (!res?.ok) throw new BackendError("Failed to fetch people")

	return (await res.json()) as ResponseAPI<Person[]>
}
