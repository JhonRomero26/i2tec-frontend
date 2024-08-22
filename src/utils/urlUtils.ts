export function generateQueryURL({ url, query }: { url: string; query?: string[] }) {
	if (!query) return url
	return url.concat("?", query.join("&"))
}
