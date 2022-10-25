import { Equal, Expect } from '@type-challenges/utils'

// Given an array of integers nums and an integer target, return true if two numbers such that they add up to target.

type ToTuple<L extends number, T extends any[] = []> = T extends { length: L } ? T : ToTuple<L, [...T, any]>

type Add<A extends number, B extends number> = [...ToTuple<A>, ...ToTuple<B>]['length']
type Sub<A extends number, B extends number> = ToTuple<A> extends [...ToTuple<B>, ...infer Tail] ? Tail['length'] : -1
// type FindIndex<T extends unknown[], K, I extends unknown = 0> = T extends [infer Head, ...infer Tail] ? Head extends K ? I : I extends number ? FindIndex<Tail, K, Add<I, 1>> : undefined : undefined
type MoveElementTupple<
  T extends unknown[],
  I extends unknown = 0,
  N extends number = 0,
  R extends unknown[] = []
> = T extends [infer Head, ...infer Tail] ?
  Equal<I, N> extends true ?
  [Head, ...R, ...Tail] :
  Add<N, 1> extends number ?
  MoveElementTupple<Tail, I, Add<N, 1>, [...R, Head]> :
  never :
  never

type Traverse<N extends unknown[], T extends number, R extends unknown[] = N> =
  R extends [infer P, ...infer Rest] ?
  P extends number ?
  Sub<T, P> extends Rest[number] ?
  true :
  Traverse<N, T, Rest> :
  Traverse<N, T, Rest> :
  false

// not support minus number
type TwoSum<N extends unknown[], T extends number, Index extends number = 0> =
  Index extends N['length'] ?
  [] :
  Traverse<MoveElementTupple<N, Index>, T> extends true ?
  true :
  Add<Index, 1> extends number ?
  TwoSum<N, T, Add<Index, 1>> :
  false

type r1 = Equal<TwoSum<[3, 2, 4], 7>, true>
type r2 = Equal<TwoSum<[3, 3], 6>, true>
type r3 = Equal<TwoSum<[3, 4, 1, 2, 7, 6], 12>, false>