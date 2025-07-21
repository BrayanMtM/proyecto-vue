import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'

// Lazy loading para mejorar el rendimiento
const UsersPage = () => import('@/pages/UsersPage.vue')
const GamesPage = () => import('@/pages/GamesPage.vue')
const VotingPage = () => import('@/pages/VotingPage.vue')
const RankingPage = () => import('@/pages/RankingPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView,
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: UsersPage,
    },
    {
      path: '/juegos',
      name: 'Juegos',
      component: GamesPage,
    },
    {
      path: '/votacion',
      name: 'Votacion',
      component: VotingPage,
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: RankingPage,
    },
  ],
})

export default router


