<template>
  <form
    @submit.prevent="submitTask"
    class="flex flex-col gap-3 justify-center space-x-2 w-full md:max-w-screen-md"
  >
    <input
      v-model="task.description"
      type="text"
      class="border rounded-xl p-2 w-full text-xl text-center"
      placeholder="Que vas a hacer hoy?"
    />
    <div class="flex gap-3 justify-end">
      <div class="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          v-model="task.isComplex"
          class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
        />
        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900"
          >Es una tarea compleja?
        </label>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded-xl">
        Añadir
      </button>
      <button class="p-2 bg-red-400 hover:bg-red-600 rounded-xl">
        <ClockIcon />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '../interfaces/task.interface'
import ClockIcon from '@/module/common/icons/ClockIcon.vue'

const task = ref<Task>({
  id: new Date().getTime(),
  description: '',
  isComplex: false,
  trackedTime: 0
})

const emit = defineEmits<{
  'add-task': [task: Task]
}>()

function submitTask() {
  if (task.value.description.trim()) {
    task.value.id = Date.now()
    emit('add-task', { ...task.value })
    task.value.description = ''
    task.value.trackedTime = 0
    task.value.isComplex = false
  }
}
</script>
