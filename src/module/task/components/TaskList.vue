<template>
  <div class="w-full max-w-screen-lg">
    <div
      v-for="task in tasks"
      :key="task.id"
      class="bg-white p-4 rounded-xl shadow mb-2 flex justify-between w-full"
    >
      <div class="flex items-center gap-2">
        <input
          id="link-checkbox"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        />

        <p>{{ task.description }}</p>
      </div>
      <div class="flex justify-end items-center">
        <div class="flex space-x-2">
          <ToolTip
            text="Puedes considerar dividir tus tareas."
            position="bottom"
            v-if="task.isComplex"
          >
            <div class="cursor-pointer"><InfoCircleIcon /></div>
          </ToolTip>
        </div>
      </div>
      <!-- Aquí se podrían agregar subtareas si la tarea es compleja -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ToolTip from '@/module/common/components/ToolTip.vue'
import InfoCircleIcon from '@/module/common/icons/InfoCircleIcon.vue'

defineProps(['tasks'])
</script>
