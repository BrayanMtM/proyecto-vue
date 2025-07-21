<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/ui/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">
    <NavBar />
    <RouterView />
  </div>
</template>
