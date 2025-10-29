import { createRouter, createWebHashHistory } from "vue-router";
import GridView from "./views/GridView.vue";
import AnimationsView from "./views/AnimationsView.vue";
import ModernCSSView from "./views/ModernCSSView.vue";
import ComponentsView from "./views/ComponentsView.vue";
import Badges from "./views/Badges.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/grid",
    },
    {
      path: "/grid",
      name: "grid",
      component: GridView,
    },
    {
      path: "/animations",
      name: "animations",
      component: AnimationsView,
    },
    {
      path: "/modern-css",
      name: "modern-css",
      component: ModernCSSView,
    },
    {
      path: "/components",
      name: "components",
      component: ComponentsView,
    },
    {
      path: "/badges",
      name: "badges",
      component: Badges,
    },
  ],
});

export default router;
