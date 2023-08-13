import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home.vue");
const Chat = () => import("../views/Chat.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/chat",
      name: "Chat Home",
      component: Chat,
    },
    {
      path: "/chat/:id",
      name: "Chat",
      component: Chat,
    },
  ],
});

export default router;
