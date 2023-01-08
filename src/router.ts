import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from '@/components/HelloWorld.vue'
import Music from '@/components/MusicView.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/test",
    name: "Test",
    component: Music
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;