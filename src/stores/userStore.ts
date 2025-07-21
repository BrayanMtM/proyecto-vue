import { defineStore } from 'pinia'
export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [] as { nombre: string; apellido: string; correo: string }[],
  }),

  actions: {
    addUser(user: { nombre: string; apellido: string; correo: string }) {
      this.users.push(user)
    },

    updateUser(index: number, updatedUser: { nombre: string; apellido: string; correo: string }) {
      if (index >= 0 && index < this.users.length) {
        this.users[index] = updatedUser
      }
    },

    deleteUser(index: number) {
      if (index >= 0 && index < this.users.length) {
        this.users.splice(index, 1)
      }
    },
  },
})
