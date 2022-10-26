type Flatten<T extends any[], Res extends any[] = []> =
  T extends [infer P, ...infer R] ?
  P extends any[] ?
  Flatten<R, [...Res, ...Flatten<P>]> :
  Flatten<R, [...Res, P]> :
  Res

type Flatten2<T extends any[]> = T extends [infer R, ...infer Rest] ? R extends any[] ? [...Flatten<R>, ...Flatten<Rest>] : [R, ...Flatten<Rest>] : []

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

export { }