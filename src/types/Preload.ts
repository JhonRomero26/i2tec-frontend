export type Preload = {
  href: string
  as: string
  type: string
  rel?: "preload" | "prefetch"
  crossorigin?: string
}