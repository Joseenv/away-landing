import { IconArrow } from '../../.nuxt/components';
<template>
  <article class="flex flex-col gap-4 text-[#111] mb-16 xl:w-[383px]">
    <h2 class="text-4xl font-lyon">Sign up for our emails</h2>
    <p class="text-sm font-graphik leading-[1.4rem]">We’ll send you updates on our latest launches and more. Need to take off? Unsubscribe at any time.</p>
    <form class="w-full flex justify-between items-center outline outline-[1px] outline-[#111]" action="">
      <input class="w-full h-14 bg-[#f7f0ea] px-4 placeholder:font-graphikLight placeholder:text-[#111] placeholder:text-base" type="email" placeholder="Email address" aria-label="Newsletter email input">
      <button class="min-w-14 h-14 bg-black flex justify-center items-center">
        <icon-arrow fill="#fff" width="28" />
      </button>
    </form>
  </article>
</template>