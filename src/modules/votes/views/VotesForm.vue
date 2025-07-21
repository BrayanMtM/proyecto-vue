<template>
  <div class="max-w-2xl mx-auto p-6 text-white">
    <h1 class="text-2xl font-bold text-center mb-6">Votar por tu Juego Favorito</h1>
    <ul class="space-y-4">
      <li
        v-for="(game, index) in games"
        :key="index"
        class="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
      >
        <div>
          <h2 class="text-lg font-semibold">{{ game.nombre }}</h2>
          <p class="text-sm text-gray-400">{{ game.genero }}</p>
        </div>
        <button
          class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          @click="vote(index)"
        >
          Votar
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'
const gameStore = useGameStore()
const games = gameStore.games

function vote(index: number) {
  gameStore.voteGame(index)
}
</script>
