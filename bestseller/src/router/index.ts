import { createRouter, createWebHistory } from "vue-router";

import { ProductList, ProductDetails } from "../views/";

const routes = [
  { path: "/:categoryId",
    name: "product-list",
    component: ProductList 
  },
  {
    path: "/product/:id",
    name: "product-details",
    component: ProductDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
