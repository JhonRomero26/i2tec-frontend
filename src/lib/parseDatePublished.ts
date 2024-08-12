export const datePublishedOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "utc",
}

export function parseDatePublished(date: string | Date, locate: string = "es"): string {
  return new Date(date).toLocaleDateString(locate, datePublishedOptions)
}
