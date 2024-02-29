<script setup lang="ts">
interface Props {
  title: string;
  items: string[];
  socialcons?: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-6 w-1/2 lg:w-[180px] mb-10 text-[#111]">
    <span class="text-lg font-graphikMedium uppercase tracking-wide">{{ title }}</span>
    <ul class="flex flex-col gap-4 font-graphikLight">
      <li v-for="item in items" :key="item" class="">{{ item }}</li>
      <!-- <li v-if="socialcons" class="flex gap-4">
        <li v-for="socialcon in socialcons" :key="socialcon" class="">{{ socialcon }}</li>
      </li> -->
    </ul>
  </div>
</template>