export const datePublishedOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'utc',
}

export function parseDatePublished(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", datePublishedOptions);
}
