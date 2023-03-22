<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<script>
export default {
  data() {
    return {
      page: 1
    }
  },
  methods: {
    goBack() {
      this.page--
      return this.$router.go(-1)
    }
  }
}
</script>

<template>
  <div class="mobile:bg-sidebar-mobile mobile:h-[172px]">
    <nav class="text-center text-white pt-8">
      <Sidebar page="1" />
      <Sidebar page="2" />
      <Sidebar page="3" />
      <Sidebar page="4" />
    </nav>
  </div>
  <RouterView />
  <div class="flex justify-between items-center bg-white absolute bottom-0 w-full">
    <button v-if="page > 1" @click="goBack" class="text-gray-cool font-semibold m-4">Go back</button>
    <button @click="() => {page++; $router.push({name: `page${page}`})}" class="bg-blue-marine rounded text-white px-4 py-2 m-4 relative ">Next Step</button>
  </div>
</template>