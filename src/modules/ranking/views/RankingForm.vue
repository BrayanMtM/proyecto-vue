<template>
  <div class="max-w-2xl mx-auto p-6 bg-gray-900 shadow-md rounded-lg mt-6">
    <h2 class="text-2xl font-bold mb-4 text-center">Ranking de Juegos</h2>

    <ul v-if="rankedGames.length > 0" class="space-y-3">
      <li
        v-for="(game, index) in rankedGames"
        :key="index"
        class="p-4 bg-gray-500 rounded-lg flex justify-between items-center"
      >
        <div>
          <p class="font-semibold text-lg">{{ index + 1 }}. {{ game.nombre }}</p>
          <p class="text-sm text-white">Género: {{ game.genero }}</p>
        </div>
        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {{ game.votos }} votos
        </span>
      </li>
    </ul>

    <p v-else class="text-center text-gray-500">No hay juegos</p>

    <div class="mt-6 flex justify-center">
      <!-- <button
        @click="resetAllVotes"
        class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
      >
        Reiniciar votos
      </button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'
import { computed } from 'vue'

const gameStore = useGameStore()

// ordenado los votos
const rankedGames = computed(() => [...gameStore.games].sort((a, b) => b.votos - a.votos))

// function resetAllVotes() {
//   if (confirm('Reiniciar')) {
//     gameStore.resetVotes()
//   }
// }
</script>

