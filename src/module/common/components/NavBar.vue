<script setup lang="ts">
import PomodoroTimer from '@/module/timer/components/PomodoroTimer.vue'
import { useTimerStore } from '@/module/timer/store/useTimerStore'
const useTaskStore = useTimerStore()
</script>

<template>
  <nav
    :class="[
      'p-4 text-white flex justify-between items-center transition-all duration-500',
      {
        'focus-navbar': !useTaskStore.isRest,
        'rest-navbar': useTaskStore.isRest
      }
    ]"
  >
    <h1 class="text-xl font-bold hidden md:block">Atomic Task</h1>
    <PomodoroTimer />
  </nav>
  <div class="flex justify-center md:hidden">
    <h1 class="text-2xl font-bold py-2">Atomic Task</h1>
  </div>
</template>

<style scoped>
.focus-navbar {
  @apply bg-red-700;
}
.rest-navbar {
  @apply bg-green-700;
}
</style>
