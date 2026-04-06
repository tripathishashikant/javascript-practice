import { createRouter, createWebHistory } from 'vue-router';

import ConceptView from '@/views/ConceptView.vue';
import HomeView from '@/views/HomeView.vue';
import ProblemView from '@/views/ProblemView.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/concept/:categoryId?',
    name: 'concept',
    component: ConceptView,
    props: true,
  },
  {
    path: '/problem/:problemId',
    name: 'problem',
    component: ProblemView,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
