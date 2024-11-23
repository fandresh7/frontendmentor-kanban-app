export interface Board {
  id: string
  name: string
  columns: Column[]
}

export interface Column {
  id: string
  name: string
  tasks: Task[]
}

export interface Task {
  id: string
  title: string
  description: string
  status: Status
  subtasks: Subtask[]
}

export enum Status {
  Doing = 'Doing',
  Done = 'Done',
  Todo = 'Todo'
}

export interface Subtask {
  id: string
  title: string
  isCompleted: boolean
}
