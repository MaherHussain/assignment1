<template>
  <aside class="w-64 bg-gray-800 h-screen text-gray-100 flex-shrink-0">
    <div class="p-4">
      <nav>
        <ul>
          <li v-for="category in thirdLevelOfCategories"
              :key="category?.id"
              class="mb-4">
              <span v-for="sub in category?.categories" :key="sub.id"  class="block py-2 px-4 rounded cursor-pointer hover:bg-gray-700" @click="navigateToCategory(sub?.id)">
                {{ sub.name.dk }}
              </span>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import data from "../assets/data.ts";

const { push } = useRouter();

const { categories } = data;

const thirdLevelOfCategories = Object.values(categories.categories).map(category => category).flatMap(category => category.categories).flatMap(category => category?.categories)

const navigateToCategory = (categoryId: string) => {
  console.log(thirdLevelOfCategories)
  push({
    name: "product-list",
    params: { categoryId },
  });
};
</script>
