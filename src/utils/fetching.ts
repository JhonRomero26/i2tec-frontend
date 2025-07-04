import { BackendError } from "@/utils/errors"

export async function fetchWithTimeout(input: RequestInfo, init?: RequestInit, timeoutMs = 3000) {
	const controller = new AbortController()
	const signal = init?.signal || controller.signal
	const customInit = { ...init, signal }

	// Creamos una promesa que rechaza al cumplirse el timeout
	const timeoutPromise = new Promise<never>((_, reject) => {
		const timeout = setTimeout(() => {
			clearTimeout(timeout)
			controller.abort()
			reject(new BackendError("Request timed out"))
		}, timeoutMs)
	})

	// Usamos Promise.race para ver cuál promesa termina primero
	return Promise.race([fetch(input, customInit), timeoutPromise])
}
