const routes = [
  {
    component: () => import("layouts/Layout.vue"),
    children: [
      {
        path: "/todos",
        component: () => import("src/pages/todolist/todos.vue"),
      },

      // Always leave this as last one,
      // but you can also remove it
      {
        path: "/:catchAll(.*)*",
        component: () => import("pages/Error404.vue"),
      },
      {
        name: "select",
        path: "/select",
        component: () => import("src/pages/selection/Select.vue"),
      },
      {
        name: "recipes",
        path: "/recipes",
        component: () => import("src/pages/recipes/Recipes.vue"),
      },
      {
        name: "addrecipe",
        path: "/addrecipe",
        component: () => import("src/pages/recipes/AddRecipe.vue"),
      },
      {
        name: "editrecipe",
        path: "/editrecipe/:id",
        component: () => import("src/pages/recipes/EditRecipe.vue"),
      },
    ],
  },
];

export default routes;
