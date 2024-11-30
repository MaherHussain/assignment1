<template>
  <div class="p-4">
    <!-- Handle Colors -->
    <h2 class="text-lg font-bold mb-4">Select Color</h2>
    <div class="flex space-x-4">
      <div
        v-for="(color, index) in resolvedColors"
        :key="index"
        class="cursor-pointer"
        :class="{ 'ring-2 ring-gray-800': selectedColorIndex === index }"
        @click="selectColor(index)">
        <img
          v-if="resolvedImages[index]"
          :src="resolvedImages[index][0]" 
          alt="Color Thumbnail"
          class="w-16 h-16 object-cover rounded shadow border hover:ring-2 hover:ring-gray-300"
        />
         <span class="text-xs text-gray-600">{{ color }}</span>
      </div>
    </div>

    <h2 class="text-lg font-bold mt-6 mb-4">Select Size</h2>
    <div class="flex space-x-2">
      <button
        v-for="(size, index) in resolvedSizes"
        :key="index"
        :disabled="resolvedStock(selectedColorIndex, size) === 0"
        class="px-4 py-2 border rounded-md text-sm font-medium"
        :class="{
          'bg-gray-800 text-white': selectedSize === size,
          'bg-gray-100 text-gray-500': selectedSize !== size,
          'opacity-50 cursor-not-allowed': resolvedStock(selectedColorIndex, size) === 0,
        }"
        @click="selectSize(size)">
        {{ size }}
      </button>
    </div>

    <div v-if="selectedColorIndex !== null && selectedSize" class="mt-6">
      <h3 class="text-lg font-semibold">Selected Variant:</h3>
      <p>Color: {{ resolvedColors[selectedColorIndex] }}</p>
      <p>Size: {{ selectedSize }}</p>
      <p>Stock: {{ resolvedStock(selectedColorIndex, selectedSize) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { ProductType } from "../assets/types";

interface Props {
  product: ProductType;
}

const props = defineProps<Props>();

const selectedColorIndex = ref<number | null>(null);
const selectedSize = ref<string | null>(null);

const resolvedColors = computed(() => {
  if (props.product.variant) {
    return props.product.variant.map((variant) => variant.color);
  } 
  return [props.product.color] ;
});

const resolvedSizes = computed(() => {
  if (props.product.variant) {
    const selectedVariant = props.product.variant[selectedColorIndex.value || 0];
    return selectedVariant ? selectedVariant.size : [];
  } 
  return props.product.size || [];
});

const resolvedImages = computed(() => {
  if (props.product.variant) {
    return props.product.variant.map((variant) => variant.images || []);
  } 
  return [];
});

const resolvedStock = (colorIndex: number | null, size: string): number => {
  if (props.product.variant) {
    const selectedVariant = props.product.variant[colorIndex || 0];
    return selectedVariant && selectedVariant.size.includes(size)
      ? selectedVariant.stock
      : 0;
  } else if (props.product.stock) {
    return props.product.stock as number;
  }
  return 0;
};

function selectColor(index: number) {
  selectedColorIndex.value = index;
  selectedSize.value = null; // Reset size when switching color
}

function selectSize(size: string) {
  selectedSize.value = size;
}
</script>