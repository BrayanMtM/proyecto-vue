import { defineStore } from 'pinia'

type Game = {
  nombre: string
  genero: string
  votos: number
}

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    games: [] as Game[],
  }),

  actions: {
    addGame(game: { nombre: string; genero: string }) {
      this.games.push({ ...game, votos: 0 })
    },

    updateGame(index: number, updatedGame: { nombre: string; genero: string }) {
      if (index >= 0 && index < this.games.length) {
        const votos = this.games[index].votos
        this.games[index] = { ...updatedGame, votos }
      }
    },

    deleteGame(index: number) {
      if (index >= 0 && index < this.games.length) {
        this.games.splice(index, 1)
      }
    },

    voteGame(index: number) {
      if (index >= 0 && index < this.games.length) {
        this.games[index].votos++
      }
    },

    // resetVotes() {
    //   this.games = this.games.map((game) => ({ ...game, votos: 0 }))
    // },
  },
})
