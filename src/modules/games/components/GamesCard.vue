<template>
  <RouterLink
    :to="RouterLinkCard"
    class="w-100 h-56  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center items-center text-center"
  >
    <h2 class="text-2xl font-bold mb-3 text-white">{{ title }}</h2>
    <p class="text-gray-300 text-sm">{{ description }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
const { title, description, RouterLinkCard } = defineProps({
  title: {
    type: String,
    default: 'Juegos',
  },
  description: {
    type: String,
    default: 'Gestiona tus juegos fácilmente',
  },
  RouterLinkCard: {
    type: String,
    default: '/dashboard-games',
  },
})
</script>
