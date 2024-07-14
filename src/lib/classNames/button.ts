const baseIconButtonClass = "justify-center items-center"

export const baseButtonClass =
  "inline-flex gap-2 focus:ring-4 font-medium no-underline transition-colors items-center"

export enum sizeIconButtonClass {
  default = `h-10 w-10 p-1 text-xl ${baseIconButtonClass}`,
  sm = `h-9 w-9 p-1 text-lg ${baseIconButtonClass}`,
  lg = `h-11 w-11 p-1 text-2xl ${baseIconButtonClass}`,
}

export enum typeButtonClass {
  default = "",
  transparent = "bg-transparent hover:bg-gray-100 focus:ring-gray-200",
  primary = "bg-primary text-white hover:bg-primary/80 focus:ring-primary/30",
  secondary = "bg-white hover:bg-gray-100 focus:ring-gray-200",
  danger = "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
}

export enum sizeButtonClass {
  default = "text-sm px-5 py-2.5",
  sm = "text-xs px-3 py-1",
  lg = "text-base px-5 py-2.5",
}

export enum breandButtonClass {
  facebookBtn = "bg-blue-500 text-white hover:bg-blue-400",
  instagramBtn = "bg-gradient-to-br from-pink-500 to-red-500 text-white hover:bg-gradient-to-br hover:from-pink-400 hover:to-red-400"
}
