export enum adminHeaderClass {
  baseClass = "relative isolate flex h-full items-center justify-between bg-white py-2 px-4",
  searchBox = "absolute left-0 grid h-full w-full items-center gap-4 bg-white px-4 transition-[visibility_top_opacity] grid-cols-[42px_1fr_42px]",
  searchBoxInactive = "invisible top-[-100] opacity-0",
  searchBoxActive = "visible top-0 opacity-100",
  searchBoxComponent = "w-[90%] justify-center",
}
