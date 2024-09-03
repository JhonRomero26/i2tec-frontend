import { BACKEND_URL } from "@/consts/app"
import { fetchTimeout } from "@/consts/fetching"
import type { ResponseAPI } from "@/models/ResponseAPI"
import type { Teacher } from "@/models/Teacher"
import { BackendError } from "@/utils/errors"
import { generateQueryURL } from "@/utils/urlUtils"

const url = `${BACKEND_URL}/api/teachers`

export async function getTeachers({ query }: { query?: string[] } = {}): Promise<
	ResponseAPI<Teacher[]>
> {
	const controller = new AbortController()
	const { signal } = controller
	setTimeout(() => controller.abort(), fetchTimeout)

	const q = ["populate=person.avatar"].concat(query || [])
	const res = await fetch(generateQueryURL({ url, query: q }), {
		signal,
	}).catch((err) => {
		controller.abort()
		console.error(err)
	})

	if (!res?.ok) throw new BackendError("Failed to fetch teachers")

	return (await res.json()) as ResponseAPI<Teacher[]>
}

export async function getTeacher({
	id,
	query,
}: {
	id: string
	query?: string[]
}): Promise<ResponseAPI<Teacher[]>> {
	const controller = new AbortController()
	const { signal } = controller
	setTimeout(() => controller.abort(), fetchTimeout)

	const q = ["populate=person.avatar"].concat(query || [])
	const res = await fetch(generateQueryURL({ url: `${url}/${id}`, query: q }), { signal }).catch(
		(err) => {
			controller.abort()
			console.error(err)
		}
	)

	if (!res?.ok) throw new BackendError("Failed to fetch teachers")

	return (await res.json()) as ResponseAPI<Teacher[]>
}
