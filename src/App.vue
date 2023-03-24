<script setup>
import Sidebar from './components/Sidebar.vue'
import AddOnsView from './views/AddOnsView.vue';
import FinishingUpView from './views/FinishingUpView.vue';
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
      <Sidebar page="1" :class="page == 1 ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="2" :class="page == 2 ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="3" :class="page == 3 ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="4" :class="page >= 4 ? 'bg-blue-light text-blue-marine' : ''"/>
    </nav>
  </div>
  <PersonalInfoView v-if="page == 1" />
  <SelectPlanView v-if="page == 2" v-model:yearly="yearly" />
  <AddOnsView v-if="page == 3" :yearly="yearly" />
  <FinishingUpView v-if="page == 4" :yearly="yearly" />


  <div class="flex justify-between items-center bg-white absolute bottom-0 w-full font-semibold">
    <button v-show="page > 1" @click="() => { page-- }" class="text-gray-cool m-4">Go back</button>
    <button v-if="page == 4" class="bg-blue-purplish rounded text-white px-4 py-2 m-4 relative ">Confirm</button>
    <button v-else @click="() => { page++ }" class="bg-blue-marine rounded text-white px-4 py-2 m-4 relative">Next Step</button>
  </div>

</template>