import HomeView from '../Views/HomeView.vue'
import UsuariosFavsView from '../Views/UsuariosFavsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/usuarios",
    },
    {
      path: "/usuarios",
      component: HomeView
    },
    {
      path: "/usuarios/favs",
      component: UsuariosFavsView
    },

  ],
})

export default router
