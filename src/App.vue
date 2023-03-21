<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavItem from './components/NavItem.vue';

</script>

<template>
  <header class="mobile:bg-sidebar-mobile">
    <nav class="text-center font-ubuntu text-white">
      <NavItem page="1" />
      <NavItem page="2" />
      <NavItem page="3" />
      <NavItem page="4" />
    </nav>
  </header>
</template>