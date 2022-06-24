import { createRouter, createWebHashHistory } from 'vue-router'
import testVue from '../components/test.vue';
import Home from '../components/home.vue';

const routes = [
  {
    path: '/', component: Home,
  },
  {
    path: '/test', component: testVue,
  }
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes

})