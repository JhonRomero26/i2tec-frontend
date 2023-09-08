import type { Route, RouteWithIcon, RouteWithImage } from "../types";

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
];

export const SOCIAL_ROUTES: RouteWithIcon[] = [
  {
    iconName: "brand-facebook",
    path: "https://facebook.com",
    label: "Facebook",
  },
  {
    iconName: "brand-instagram",
    path: "https://instagram.com",
    label: "Instagram",
  },
  {
    iconName: "brand-github",
    path: "https://github.com",
    label: "Githuv",
  },
  {
    iconName: "brand-behance",
    path: "https://behance.com",
    label: "Behance",
  },
];

export const ABOUT_ROUTES: RouteWithImage[] = [
  {
    label: "Sobre nosotros",
    path: "/about-us",
    image: "/images/prueba.jpg",
  },
  {
    label: "Docentes participantes",
    path: "/about-us/teachers",
    image: "/images/prueba.jpg",
  },
  // {
  //   label: "Dentro de I2TEC",
  //   path: "/about-us/envolve",
  //   image: "/images/prueba.jpg",
  // },
];

