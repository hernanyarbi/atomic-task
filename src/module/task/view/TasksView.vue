<template>
  <div class="flex flex-col justify-center items-center gap-4 p-4">
    <TaskForm @add-task="addTask" />
    <TaskList :tasks="tasks" @delete-task="deleteTask" @update-task="updateTask" />
  </div>
</template>

<script setup lang="ts">
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import { useTaskStore } from '../store/useTaskStore'

const taskStore = useTaskStore()
const { tasks, addTask, deleteTask, updateTask } = taskStore
</script>
