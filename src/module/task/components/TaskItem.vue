<template>
  <div class="flex items-center gap-2">
    <input
      id="link-checkbox"
      type="checkbox"
      @change="taskStore.completeTask(task.id)"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
    />

    <p>{{ task.description }}</p>
  </div>
  <div class="flex justify-end items-center">
    <div class="flex space-x-2">
      <ToolTip text="Puedes considerar dividir tus tareas." position="bottom" v-if="task.isComplex">
        <div class="cursor-pointer"><InfoCircleIcon /></div>
      </ToolTip>
    </div>
  </div>
  <!-- Aquí se podrían agregar subtareas si la tarea es compleja -->
</template>

<script setup lang="ts">
import ToolTip from '@/module/common/components/ToolTip.vue'
import InfoCircleIcon from '@/module/common/icons/InfoCircleIcon.vue'
import type { Task } from '../interfaces/task.interface'
import { useTaskStore } from '../store/useTaskStore'
interface Props {
  task: Task
}
defineProps<Props>()

const taskStore = useTaskStore()
</script>
