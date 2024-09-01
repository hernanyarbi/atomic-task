<template>
  <div>
    <div v-for="task in tasks" :key="task.id" class="bg-white p-4 rounded shadow mb-2">
      <div class="flex justify-between items-center">
        <p>{{ task.description }} - {{ task.difficulty === 'simple' ? 'Sencilla' : 'Compleja' }}</p>
        <div class="flex space-x-2">
          <button @click="$emit('delete-task', task.id)" class="text-red-600">Eliminar</button>
          <button @click="$emit('update-task', task)" class="text-blue-600">Editar</button>
        </div>
      </div>
      <!-- Aquí se podrían agregar subtareas si la tarea es compleja -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['tasks'])
</script>
