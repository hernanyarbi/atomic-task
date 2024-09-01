<template>
  <form
    @submit.prevent="submitTask"
    class="flex flex-col gap-2 justify-center space-x-2 w-screen md:max-w-screen-md"
  >
    <input
      v-model="task.description"
      type="text"
      class="border rounded-full px-3 py-1 w-full text-xl"
      placeholder="Que vas a hacer hoy?"
    />
    <div class="flex gap-3 justify-end">
      <select v-model="task.difficulty" class="border rounded px-2 py-1">
        <option value="simple">Sencilla</option>
        <option value="complex">Compleja</option>
      </select>
      <button type="submit" class="bg-blue-600 text-white px-4 py-1 rounded">Añadir</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '../store/useTaskStore'

const task = ref<Task>({
  description: '',
  difficulty: 'simple'
})

const emit = defineEmits<{
  'add-task': [task: Task]
}>()

function submitTask() {
  if (task.value.description.trim()) {
    task.value.id = Date.now()
    emit('add-task', { ...task.value })
    task.value.description = ''
  }
}
</script>
