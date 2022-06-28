import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue';
import Home from '../pages/home/index.vue';
import Login from '../pages/login/index.vue'
const routes = [
  {
    path: '/',

    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      }

    ]
  },
  {
    path: '/login', component: Login,
  }
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes

})