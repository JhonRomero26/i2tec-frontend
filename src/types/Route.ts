export interface Route {
	path: string
	label: string
}

export type RouteWithImage = {
	image: string
} & Route
