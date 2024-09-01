<template>
  <div class="flex items-center gap-2 border border-white rounded-full px-2 py-1">
    <button
      @click="toggleTimer"
      class="rounded-full bg-gray-500 bg-opacity-30 hover:bg-gray-700 hover:bg-opacity-25 text-white p-1"
    >
      <PlayCircleIcon v-if="!useTaskStore.isRunning" />
      <StopCircleIcon v-else />
    </button>
    <span class="font-mono">{{ useTaskStore.minutes }}:{{ useTaskStore.seconds }}</span>
  </div>
  <span>Pomodoro: {{ useTaskStore.cycle }}</span>
</template>

<script setup lang="ts">
import PlayCircleIcon from '@/module/common/icons/PlayCircleIcon.vue'
import { useTimerStore } from '../store/useTimerStore'
import StopCircleIcon from '@/module/common/icons/StopCircleIcon.vue'

// Usar el composable useTimer
const useTaskStore = useTimerStore()

// Función para alternar el temporizador
const toggleTimer = () => {
  if (useTaskStore.isRunning) {
    useTaskStore.stopTimer()
  } else {
    useTaskStore.startTimer()
  }
}
</script>
