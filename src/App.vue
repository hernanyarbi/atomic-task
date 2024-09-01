<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar />
    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
import NavBar from './module/common/components/NavBar.vue'
</script>
