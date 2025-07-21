<template>
  <form
    @submit.prevent
    class="flex flex-col gap-6 p-8 items-center bg-gray-900 rounded-xl shadow-xl max-w-md mx-auto mt-8"
  >
    <h2 class="text-2xl font-bold text-white mb-4">
      {{ editIndex !== null ? 'Editar Juego' : 'Agregar Juego' }}
    </h2>

    <GamesInput
      inputLabel="Juego"
      inputType="text"
      inputDes="Nombre del juego"
      inputName="nombre"
      v-model="formData.nombre"
      :inputError="errors.nombre"
      placeholder="Escribe el nombre del juego"
    />

    <GamesInput
      inputLabel="Género"
      inputName="genero"
      v-model="formData.genero"
      :inputError="errors.genero"
      :options="['Acción', 'Supervivencia', 'Aventura', 'Estrategia', 'Deportes', 'RPG']"
    />

    <GamesButton
      :buttonLabel="editIndex !== null ? 'Actualizar' : 'Agregar'"
      @click="handleSubmit"
    />
  </form>

  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-xl font-semibold text-white mb-3 text-center">Juegos Agregados</h1>
    <ul class="space-y-2 flex flex-col items-center">
      <li
        v-for="(game, index) in games"
        :key="index"
        class="bg-gray-800 rounded-lg shadow-md px-4 py-3 flex flex-col items-center justify-center hover:bg-gray-700 transition w-full max-w-md"
      >
        <div class="w-full text-center mb-2">
          <span class="text-white font-bold">{{ game.nombre }}</span>
          <span class="ml-2 text-gray-400">| {{ game.genero }}</span>
        </div>
        <div class="flex gap-3">
          <button
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
            @click="editGame(index)"
          >
            Editar
          </button>
          <button
            class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            @click="deleteGame(index)"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import GamesInput from '../components/GamesInput.vue'
import GamesButton from '../components/GamesButton.vue'
import { useGameStore } from '@/stores/gameStore'

const gameStore = useGameStore()
const games = gameStore.games

const formProps = { nombre: '', genero: '' }
const formData = reactive({ ...formProps })
const errors = reactive({ ...formProps })

const editIndex = ref<number | null>(null)

function handleSubmit() {
  let valid = true

  if (!formData.nombre.trim()) {
    valid = false
    errors.nombre = 'El nombre es requerido.'
  }

  if (!formData.genero.trim()) {
    valid = false
    errors.genero = 'El género es requerido.'
  }

  if (!valid) return

  if (editIndex.value !== null) {
    // Editar juego
    gameStore.updateGame(editIndex.value, { ...formData })
    editIndex.value = null
  } else {
    // Agregar nuevo juego
    gameStore.addGame({ ...formData })
  }

  Object.assign(formData, { ...formProps })
  Object.assign(errors, { ...formProps })
}

function editGame(index: number) {
  const game = games[index]
  formData.nombre = game.nombre
  formData.genero = game.genero
  editIndex.value = index
}

function deleteGame(index: number) {
  gameStore.deleteGame(index)

  if (editIndex.value === index) {
    Object.assign(formData, { ...formProps })
    editIndex.value = null
  }
}
</script>
