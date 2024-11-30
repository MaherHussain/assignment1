<template>
  <div :class="getSpotClass(promo.type)" class="relative border overflow-hidden rounded-lg shadow-sm">
    <a :href="promo.link">
      <img
        :src="promo.image.imageUrl"
        :alt="promo.image.alt || 'Promotional Image'"
        class="w-full h-full object-cover"
      />
    </a>
  </div>
</template>

<script lang="ts" setup>


interface FocalPoint {
  x: number;
  y: number;
}

interface Image {
  aspectRatio: string;
  imageUrl: string;
  focalPoint: FocalPoint;
  maxWidth: string;
  alt?: string;
}

interface PromotionalSpot {
  link: string;
  position: number;
  type: string;
  image: Image;
}

interface Props {
    promo: PromotionalSpot;
}

defineProps<Props>();

function  getSpotClass (type:string) {
      switch (type) {
        case "2x2":
          return "col-span-2 row-span-2";
        case "2x1":
          return "col-span-2 row-span-1";
        case "1x1":
        default:
          return "col-span-1 row-span-1 h-96";
      }
    }
  
</script>