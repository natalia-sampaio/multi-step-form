<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavItem from './components/NavItem.vue';
import Step1View from './views/Step1View.vue';

</script>

<template>
  <header class="mobile:bg-sidebar-mobile mobile:h-[172px]">
    <nav class="text-center text-white">
      <NavItem page="1" class="bg-blue-light text-blue-marine" />
      <NavItem page="2" />
      <NavItem page="3" />
      <NavItem page="4" />
    </nav>
  </header>
  <main class="bg-blue-light">
    <Step1View />
  </main>
  <div class="flex justify-end w-full absolute bottom-0">
    <button class="bg-blue-marine rounded text-white p-4 m-4">Next Step</button>
  </div>
</template>