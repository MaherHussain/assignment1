<template>
  <div class="w-96 h-full">
    <div class="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
      <img
        class="w-full h-96 object-cover"
        :src="product?.images ? product?.images[0] : ''"
        :alt="product.name.dk || product.name.en"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800 truncate">
          {{ product.name.dk || 'no name' }}
        </h3>

        <div class="flex items-center justify-between mt-4">
          <span class="text-lg font-bold text-gray-800">{{ product.price }} DKK</span>
          <a
            class=" text-black px-2 py-2 cursor-pointer">
           <span @click="push({ name: 'product-details', params: { id: product.id } })">Show details</span> 
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProductType } from "../assets/types";
import { useRouter } from "vue-router";

interface Props {
  product: ProductType;
}

defineProps<Props>()

const { push } = useRouter();

</script>
