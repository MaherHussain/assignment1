<template>
  <main-menu :categories="mainCategories" />
  <div class="flex">
      <side-bar />
    <main class="">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { SideBar, MainMenu } from "./components";
import data from "./assets/data";

const { categories } = data;

const mainCategories = Object.entries(categories.categories).map((category) => {
  return {
    ...category[1],
  };
});
</script>