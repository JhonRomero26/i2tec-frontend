export type Route = {
  path: string;
  label: string;
};

export type RouteWithIcon = {
  iconName: string;
} & Route;

export type RouteWithImage = {
  image: string;
} & Route;
