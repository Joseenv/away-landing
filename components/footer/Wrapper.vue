<script setup lang="ts">
interface itemList {
  title: string;
  items: string[];
  socialcons?: string[];
}

const footerItems:itemList[] = [
  {
    title: 'Shop',
    items: ['Best sellers', 'Suitcases', 'Bags', 'Accessories', 'Shop all', 'Back in stock', 'Corporate gifting', 'Gift card'],
  },
  {
    title: 'About',
    items: ['The Away Difference', 'Our story', 'Our stores', 'Careers', 'Impact', 'Press', 'Refer a friend', 'Sustainability'],
  },
  {
    title: 'GET HELP',
    items: ['Order tracking', 'Make an exchange', 'Make a return', 'Contact us'],
  },
  {
    title: 'FAQS',
    items: ['All FAQs', 'Warranty & repairs'],
    socialcons: ['facebook', 'twitter', 'instagram', 'pinterest'],
  },
];
</script>

<template>
  <nav class="flex flex-wrap justify-start mb-4">
    <footer-item v-for="{ title, items, socialcons } in footerItems" :key="title" :title="title" :items="items" :socialcons="socialcons"/>
  </nav>
</template>