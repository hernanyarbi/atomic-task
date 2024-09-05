<template>
  <TaskList :tasks="taskStore.pendingTaskList" />
</template>

<script setup lang="ts">
import TaskList from '../components/TaskList.vue'
import { useTaskStore } from '../store/useTaskStore'

const taskStore = useTaskStore()
</script>
