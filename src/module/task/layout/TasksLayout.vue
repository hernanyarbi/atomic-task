<template>
  <main class="flex flex-col justify-center items-center gap-4 p-4">
    <div class="flex justify-end w-full md:max-w-screen-md gap-2">
      <RouterLink
        :to="{ name: 'tasks' }"
        class="p-2 bg-red-400 hover:bg-red-600 rounded-xl"
        exact-active-class="bg-pink-500 hover:bg-pink-600"
      >
        <TaskSquareIcon />
      </RouterLink>
      <RouterLink
        :to="{ name: 'completed-tasks' }"
        class="p-2 bg-red-400 hover:bg-red-600 rounded-xl"
        exact-active-class="bg-pink-500 hover:bg-pink-600"
      >
        <ClockIcon />
      </RouterLink>
    </div>
    <TaskForm @add-task="taskStore.addTask" />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import ClockIcon from '@/module/common/icons/ClockIcon.vue'
import TaskForm from '../components/TaskForm.vue'
import { useTaskStore } from '../store/useTaskStore'
import TaskSquareIcon from '@/module/common/icons/TaskSquareIcon.vue'
const taskStore = useTaskStore()
</script>
