<template>
  <div class="w-full md:max-w-screen-md">
    <div
      v-for="task in tasks"
      :key="task.id"
      class="bg-white p-4 rounded-xl shadow mb-2 flex justify-between w-full"
    >
      <TaskItem :task="task" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '../interfaces/task.interface'
import TaskItem from './TaskItem.vue'

interface Props {
  tasks: Task[]
}

defineProps<Props>()
</script>
