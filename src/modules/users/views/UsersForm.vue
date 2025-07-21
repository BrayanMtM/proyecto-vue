<template>
  <form
    @submit.prevent
    class="flex flex-col gap-6 p-8 items-center bg-gray-900 rounded-xl shadow-xl max-w-md mx-auto mt-8"
  >
    <h2 class="text-2xl font-bold text-white mb-4">
      {{ editIndex !== null ? 'Editar formulario' : 'Agregar formulario' }}
    </h2>

    <GamesInput
      inputLabel="Nombre"
      inputType="text"
      inputDes="Nombre del usuario"
      inputName="nombre"
      v-model="formData.nombre"
      :inputError="errors.nombre"
      placeholder="Escribe el nombre"
    />

    <GamesInput
      inputLabel="Apellido"
      inputType="text"
      inputDes="Apellido del usuario"
      inputName="apellido"
      v-model="formData.apellido"
      :inputError="errors.apellido"
      placeholder="Escribe el apellido"
    />

    <GamesInput
      inputLabel="Correo Electrónico"
      inputType="email"
      inputDes="Correo válido"
      inputName="correo"
      v-model="formData.correo"
      :inputError="errors.correo"
      placeholder="ejemplo@correo.com"
    />

    <GamesButton :buttonLabel="editIndex !== null ? 'Actualizar' : 'Agregar'" @click="handleSubmit" />
  </form>

  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-xl font-semibold text-white mb-3 text-center">Formulario de los usuarios</h1>
    <ol class="list-decimal list-inside space-y-3 text-white">
      <li
        v-for="(user, index) in users"
        :key="index"
        class="bg-gray-800 rounded-lg px-4 py-3 flex justify-between items-center hover:bg-gray-700 transition"
      >
        <div>
          <span class="font-bold">{{ user.nombre }} {{ user.apellido }}</span><br />
          <span class="text-gray-300 text-sm">{{ user.correo }}</span>
        </div>
        <div class="flex gap-2">
          <button
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
            @click="editUser(index)"
          >
            Editar
          </button>
          <button
            class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
            @click="deleteUser(index)"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import GamesInput from '../../games/components/GamesInput.vue'
import GamesButton from '../../games/components/GamesButton.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const users = userStore.users

const formProps = { nombre: '', apellido: '', correo: '' }
const formData = reactive({ ...formProps })
const errors = reactive({ ...formProps })

const editIndex = ref<number | null>(null)

function handleSubmit() {
  let valid = true

  // Validaciones
  if (!formData.nombre.trim()) {
    errors.nombre = 'El nombre es requerido.'
    valid = false
  } else {
    errors.nombre = ''
  }

  if (!formData.apellido.trim()) {
    errors.apellido = 'El apellido es requerido.'
    valid = false
  } else {
    errors.apellido = ''
  }

  if (!formData.correo.trim()) {
    errors.correo = 'Correo inválido.'
    valid = false
  } else {
    errors.correo = ''
  }

  if (!valid) return

  // Validar que el correo no se repita
  const correoExistente = users.some((user, i) =>
    user.correo.toLowerCase() === formData.correo.toLowerCase() &&
    i !== editIndex.value
  )

  if (correoExistente) {
    errors.correo = 'Ya existe un usuario con este correo.'
    return
  }

  // actualizar usuario
  if (editIndex.value !== null) {
    userStore.updateUser(editIndex.value, { ...formData })
    editIndex.value = null
  } else {
    userStore.addUser({ ...formData })
  }


  Object.assign(formData, { ...formProps })
  Object.assign(errors, { ...formProps })
}


function editUser(index: number) {
  const user = users[index]
  formData.nombre = user.nombre
  formData.apellido = user.apellido
  formData.correo = user.correo
  editIndex.value = index
}

// Eliminar usuario
function deleteUser(index: number) {
  userStore.deleteUser(index)
  if (editIndex.value === index) {
    Object.assign(formData, { ...formProps })
    editIndex.value = null
  }
}
</script>
