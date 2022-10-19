// 重映射键名
export type MyPick<T extends Record<string, any>, K extends string> = {
  [Key in keyof T as Key extends K ? Key : never]: T[Key]
}

type MyPick2<T, K extends keyof T> = {
  [P in K]: T[K]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

export { }