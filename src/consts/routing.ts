import type { Route, RouteWithImage } from "@/types/Route"

export const APP_ROUTES: Route[] = [
	{
		path: "/",
		label: "Inicio",
	},
	{
		path: "/projects",
		label: "Proyectos",
	},
	{
		path: "/news",
		label: "Noticias",
	},
	{
		path: "/about-us",
		label: "Nosotros",
	},
]

export const ABOUT_ROUTES: RouteWithImage[] = [
	{
		label: "Sobre nosotros",
		path: "/about-us",
		image:
			"https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
	},
	{
		label: "Docentes participantes",
		path: "/about-us/teachers",
		image:
			"https://images.unsplash.com/photo-1620206299315-db98c1578420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	},
	// {
	//   label: "Dentro de I2TEC",
	//   path: "/about-us/envolve",
	//   image: "/images/prueba.jpg",
	// },
]
