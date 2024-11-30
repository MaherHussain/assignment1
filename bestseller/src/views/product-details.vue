<template>
  <div class="flex flex-row flex-wrap">
    <div class="basis-1/3" v-if="product?.images">
      <product-image-slider :images="product?.images" />
    </div>
    <div  class="basis-2/3 screen h-screen order-solid border-2 border-gray-500 p-3">
      <h1 class="text-center">{{ product?.name.dk }}</h1>

      <div class="price text-right">
        <p>{{ product.price }} dkk</p>
      </div>
      <div v-if="product?.variant || product.color">
        <Variants :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { ProductType } from "../assets/types";
import { useRouter } from "vue-router";
import data from "../assets/data";
import { ProductImageSlider, Variants } from "../components/"

const { currentRoute } = useRouter();

const { products } = data;
const productId = computed(() => currentRoute.value.params.id);

const product = computed<ProductType>(() =>  products.find( (product) => product.id === Number(productId.value)) as ProductType);

</script>
