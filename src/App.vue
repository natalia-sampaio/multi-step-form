<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import AddOnsView from './views/AddOnsView.vue';
import PersonalInfoView from './views/PersonalInfoView.vue';
import SelectPlanView from './views/SelectPlanView.vue';

</script>

<script>
export default {
  data() {
    return {
      page: 1,
      yearly: false
    };
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
  <PersonalInfoView v-if="page === 1" />
  <SelectPlanView v-if="page === 2" v-model:yearly="yearly" />
  <AddOnsView v-if="page === 3" :yearly="yearly" />

  <div class="flex justify-between items-center bg-white absolute bottom-0 w-full">
    <button v-show="page > 1" @click="() => { page-- }" class="text-gray-cool font-semibold m-4">Go back</button>
    <button @click="() => { page++ }" class="bg-blue-marine rounded text-white px-4 py-2 m-4 relative ">Next Step</button>
  </div>

</template>