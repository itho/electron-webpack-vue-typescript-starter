import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/Home.vue'),
    },
    {
      name: 'settings',
      path: '/settings',
      component: () => import('@/views/Settings.vue'),
    },
  ],
});
