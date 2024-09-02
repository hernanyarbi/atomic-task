<template>
  <div class="flex flex-col justify-center items-center gap-4 p-4">
    <TaskForm @add-task="taskStore.addTask" />
    <TaskList :tasks="taskStore.pendingTaskList" />
  </div>
</template>

<script setup lang="ts">
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import { useTaskStore } from '../store/useTaskStore'

const taskStore = useTaskStore()
</script>
