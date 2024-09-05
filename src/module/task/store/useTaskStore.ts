import { defineStore } from 'pinia'
import type { Task } from '../interfaces/task.interface'
import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref(useLocalStorage<Task[]>('task', []))

  const addTask = (task: Task) => {
    tasks.value.push(task)
  }

  const completeTask = (taskId: number) => {
    const task = tasks.value.find((task) => task.id === taskId)
    if (!task) return
    task.completedAt = new Date()
  }

  const deleteTask = (taskId: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== taskId)
  }
  const updateTask = (updatedTask: Task) => {
    const index = tasks.value.findIndex((task) => task.id === updatedTask.id)
    if (index !== -1) {
      tasks.value[index] = updatedTask
    }
  }

  return {
    // Getters
    taskList: computed(() => [...tasks.value]),
    pendingTaskList: computed(() => tasks.value.filter((task) => !task.completedAt)),
    competedTaskList: computed(() => tasks.value.filter((task) => task.completedAt)),
    // Actions
    addTask,
    deleteTask,
    updateTask,
    completeTask
  }
})
