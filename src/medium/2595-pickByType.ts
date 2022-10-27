type PickByType<T extends object, Type> = {
  [K in keyof T as[T[K]] extends [Type] ? [Type] extends [T[K]] ? K : never : never]: T[K]
}

type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }