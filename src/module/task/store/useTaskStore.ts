import { defineStore } from 'pinia'

export interface Task {
  id?: number
  description: string
  isComplex: boolean
  subTask?: Task[]
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[]
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    deleteTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId)
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = updatedTask
      }
    }
  }
})
