import { createRouter, type RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'index', component: async () => await import('../views/home/HomeIndex.vue') },
  { path: '/login', name: 'login', component: async () => await import('../views/login/LoginIndex.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
