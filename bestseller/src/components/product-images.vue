<template>
  <div class="p-4">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
    >
      <!-- Render images dynamically -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-lg shadow-md"
      >
        <img
          :src="image"
          :alt="`Image ${index + 1}`"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  images: string[];
}

defineProps<Props>();

</script>
