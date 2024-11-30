<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
    <div class="flex-1 text-3xl text-white">
      <h1>My brand</h1>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <div class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
          v-for="category in flatMappedCategories"
          :key="category.id" >
          <span
            class="block py-2 px-4 rounded cursor-pointer hover:bg-gray-700"
            @click=" push({  name: 'product-list', params: { categoryId: category.id },})">
            {{ category.name.dk }}
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { CategoryMainType } from "../assets/types";
import { computed } from "vue";

const { push } = useRouter();

interface Props {
  categories: CategoryMainType[];
}

const props = defineProps<Props>();

const flatMappedCategories = computed(() => {
  return props.categories.flatMap((category) =>
    category.categories ? category.categories : [category]
  );
});
</script>
