// For example

interface Todo {
    title: string
    description: string
    completed: boolean
}
type MyPick<T, K extends keyof T> = { [key in K]: T[key] }

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}