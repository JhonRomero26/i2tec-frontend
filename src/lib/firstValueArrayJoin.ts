export const firstValueArrayStringJoin = (...args: string[]) =>
  args.map(value => value.split(' ')[0]).join(' ')
