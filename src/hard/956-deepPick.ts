import { Equal } from '@type-challenges/utils'

type StartsWith<T extends string, K extends string> = T extends `${K}${string}` ? 1 : 0

type DeepPick<T extends object, K extends string, R extends string = ''> = {
  [
  P in keyof T as
  P extends string ?
  1 extends StartsWith<K, `${R}${P}`> ?
  P :
  never :
  never
  ]:
  T[P] extends object ?
  DeepPick<T[P], K, P extends string ? `${R}${P}.` : ''> :
  T[P]
}

type obj = {
  name: 'hoge',
  age: 20,
  friend: {
    name: 'fuga',
    age: 30,
    family: {
      name: 'baz',
      age: 1
    }
  }
}

type Platten<T> = {
  [P in keyof T]: T[P]
}

type T1 = DeepPick<obj, 'name'>   // { name : 'hoge' }
type T2 = DeepPick<obj, 'name' | 'friend.name'>  // { name : 'hoge' } & { friend: { name: 'fuga' }}
type T3 = DeepPick<obj, 'name' | 'friend.name' | 'friend.family.name'>  // { name : 'hoge' } &  { friend: { name: 'fuga' }} & { friend: { family: { name: 'baz' }}}

type R1 = Equal<T1, {
  name: 'hoge'
}>

type R2 = Equal<T2, {
  name: 'hoge',
  friend: {
    name: 'fuga',
  }
}>

type R3 = Equal<T3, {
  name: 'hoge',
  friend: {
    name: 'fuga',
    family: {
      name: 'baz'
    }
  }
}>

export { }
