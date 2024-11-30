<template>
  <div class="product-list">
    <div class="products"  v-for="product in filteredProductsByCategory">
        <ProductCard :product="product" />
    </div>
    <div class="products" v-for="promo in promotionalSpots">
        <promotional-spot :promo="promo" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Ref, computed } from "vue";
import data from "../assets/data";
import { ProductCard, PromotionalSpot } from "../components/";
import { ProductType } from "../assets/types";
import { useRouter } from "vue-router";

const { currentRoute } = useRouter();


const { products, promotionalSpots } = data;

const filteredProductsByCategory: Ref<ProductType[]> = computed(() => {
const SelectedCategory = currentRoute.value.params.categoryId as string;
const filteredProducts= products.filter(product =>  product.categories.includes(SelectedCategory.toLocaleLowerCase()));
return filteredProducts
  ? filteredProducts
  : products;
});

</script>
<style scoped>
.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin: 10px;
  justify-content: center;
}

</style>
