import type { Person } from "@/models/Person"

export function dateFormater({ date, lang = "es" }: { date: Date | string; lang?: string }) {
	const { format } = new Intl.DateTimeFormat(lang, {
		year: "numeric",
		day: "numeric",
		month: "short",
	})

	if (date instanceof Date) return format(date)

	return format(new Date(date))
}

export function formatAuthorName({ first_name, last_name }: Person) {
	const shortFirst = first_name.split(" ")[0]
	const shortLast = last_name.split(" ")[0]

	return `${shortLast}, ${shortFirst}`
}
