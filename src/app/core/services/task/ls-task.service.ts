import { Injectable } from '@angular/core'
import { Subtask } from '@core/models/subtask.model'
import { Task } from '@core/models/task.model'

@Injectable({
  providedIn: 'root'
})
export class LsTaskService {
  private readonly taskStorageKey = 'tasks'

  async getTasks(columnId: string): Promise<Task[]> {
    const tasksJson = localStorage.getItem(this.taskStorageKey)
    const tasks: Task[] = tasksJson ? JSON.parse(tasksJson) : []

    return tasks.filter(task => task.columnId === columnId)
  }

  async createTask(task: Partial<Task>): Promise<Task> {
    const tasksJson = localStorage.getItem(this.taskStorageKey)
    const tasks: Task[] = tasksJson ? JSON.parse(tasksJson) : []

    const newId = new Date().getTime().toString()
    const columnTasksCount = tasks.filter(t => t.columnId === (task.columnId || '')).length

    const newTask: Task = {
      id: newId,
      title: task.title || 'Untitled task',
      description: task.description || '',
      subtasks: [],
      columnId: task.columnId || '',
      order: columnTasksCount + 1
    }

    if (task.subtasks && task.subtasks.length > 0) {
      const subtasksTitles = task.subtasks as unknown as string[]
      const subtasks: Subtask[] = subtasksTitles.map((subtask, index) => ({
        id: `${newId}-${index}`,
        title: subtask,
        isCompleted: false
      }))

      newTask.subtasks = subtasks
    }

    tasks.push(newTask)
    localStorage.setItem(this.taskStorageKey, JSON.stringify(tasks))
    return newTask
  }

  async updateTask(taskId: string, task: Partial<Task>): Promise<Task> {
    const tasksJson = localStorage.getItem(this.taskStorageKey)
    const tasks: Task[] = tasksJson ? JSON.parse(tasksJson) : []

    const index = tasks.findIndex(t => t.id === taskId)
    if (index === -1) throw new Error('Task not found')

    const updatedTask: Task = {
      ...tasks[index],
      ...task
    }

    tasks[index] = updatedTask
    localStorage.setItem(this.taskStorageKey, JSON.stringify(tasks))
    return updatedTask
  }

  async reorderTask(taskId: string, destinationOrder: number, destinationColumnId?: string): Promise<Task> {
    const tasksJson = localStorage.getItem(this.taskStorageKey)
    const tasks: Task[] = tasksJson ? JSON.parse(tasksJson) : []

    const movingTask = tasks.find(t => t.id === taskId)
    if (!movingTask) throw new Error('Task not found')

    if (destinationColumnId) {
      movingTask.columnId = destinationColumnId
    }
    const effectiveColumnId = movingTask.columnId

    const otherTasks = tasks.filter(t => t.columnId !== effectiveColumnId)
    const columnTasks = tasks.filter(t => t.columnId === effectiveColumnId)

    const updatedTasks = columnTasks.filter(t => t.id !== taskId)
    updatedTasks.splice(destinationOrder, 0, movingTask)

    const updatedTasksOrder = updatedTasks.map((task, index) => ({ ...task, order: index + 1 }))
    const allTasks = [...otherTasks, ...updatedTasksOrder]

    localStorage.setItem(this.taskStorageKey, JSON.stringify(allTasks))
    return movingTask
  }

  async deleteTask(id: string): Promise<string> {
    const tasksJson = localStorage.getItem(this.taskStorageKey)
    const tasks: Task[] = tasksJson ? JSON.parse(tasksJson) : []
    const updatedTasks = tasks.filter(t => t.id !== id)
    localStorage.setItem(this.taskStorageKey, JSON.stringify(updatedTasks))
    return id
  }

  async updateSubtask(id: string, taskId: string, subtask: Partial<Subtask>): Promise<Subtask> {
    const tasksJson = localStorage.getItem(this.taskStorageKey)
    const tasks: Task[] = tasksJson ? JSON.parse(tasksJson) : []
    const taskIndex = tasks.findIndex(t => t.id === taskId)
    if (taskIndex === -1) throw new Error('Task not found')

    const currentTask = tasks[taskIndex]
    const subtaskIndex = currentTask.subtasks.findIndex(st => st.id === id)
    if (subtaskIndex === -1) throw new Error('Subtask not found')

    const updatedSubtask: Subtask = {
      ...currentTask.subtasks[subtaskIndex],
      ...subtask
    }

    currentTask.subtasks[subtaskIndex] = updatedSubtask
    tasks[taskIndex] = currentTask
    localStorage.setItem(this.taskStorageKey, JSON.stringify(tasks))
    return updatedSubtask
  }
}
