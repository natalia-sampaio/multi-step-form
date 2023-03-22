<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavItem from './components/NavItem.vue';
import Step1View from './views/Step1View.vue';

</script>

<template>
  <div class="mobile:bg-sidebar-mobile mobile:h-[172px]">
    <nav class="text-center text-white pt-8">
      <NavItem page="1" class="bg-blue-light text-blue-marine" />
      <NavItem page="2" />
      <NavItem page="3" />
      <NavItem page="4" />
    </nav>
  </div>
  <Step1View />
  <div class="flex justify-end bg-white absolute bottom-0 w-full">
    <button class="bg-blue-marine rounded text-white p-4 m-4">Next Step</button>
  </div>
</template>