<script setup>
import Sidebar from './components/Sidebar.vue'

</script>

<script>
export default {
    data() {
        return {
            yearly: false
        };
    }
}
</script>

<template>
  <div class="bg-sidebar-mobile bg-cover bg-no-repeat h-[172px] lg:hidden">
    <nav class="text-center text-white pt-8">
      <Sidebar page="1" :class="$route.name === 'page1' ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="2" :class="$route.name === 'page2' ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="3" :class="$route.name === 'page3' ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="4" :class="$route.name === 'page4' ? 'bg-blue-light text-blue-marine' : $route.name === 'page5' ? 'bg-blue-light text-blue-marine' : ''"/>
    </nav>
  </div>

  <RouterView v-model:yearly="yearly" :yearly="yearly" />
</template>