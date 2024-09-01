<template>
  <div class="relative" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <!-- Contenido que activa el tooltip -->
    <slot></slot>

    <!-- Contenido del tooltip -->
    <div
      v-if="visible"
      class="absolute z-10 p-2 text-sm text-white bg-gray-800 max-w-[300px] rounded shadow-lg w-[150px]"
      :class="tooltipPositionClass"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// Propiedades recibidas por el tooltip
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'top' // Posición predeterminada del tooltip
  }
})

// Estado local
const visible = ref(false)

// Mostrar el tooltip
const showTooltip = () => {
  visible.value = true
}

// Ocultar el tooltip
const hideTooltip = () => {
  visible.value = false
}

// Calcular la posición del tooltip
const tooltipPositionClass = computed(() => {
  switch (props.position) {
    case 'top':
      return '-top-full left-1/2 transform -translate-x-1/2 -translate-y-2'
    case 'bottom':
      return 'top-full left-1/2 transform -translate-x-1/2 translate-y-2'
    case 'left':
      return 'left-0 transform -translate-x-full -translate-y-1/2 top-1/2'
    case 'right':
      return 'right-0 transform translate-x-full -translate-y-1/2 top-1/2'
    default:
      return '-top-full left-1/2 transform -translate-x-1/2 -translate-y-2'
  }
})
</script>

<style scoped>
/* Estilos adicionales para el tooltip */
</style>
