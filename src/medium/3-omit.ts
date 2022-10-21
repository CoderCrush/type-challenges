import { MyPick } from "../easy/4-pick"

type MyOmit<T extends Record<string, any>, K extends string> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}

type MyOmit2<T, K> = Pick<T, Exclude<keyof T, K>>

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

export { }