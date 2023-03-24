<script setup>
import Sidebar from './components/Sidebar.vue'
import AddOnsView from './views/AddOnsView.vue';
import FinishingUpView from './views/FinishingUpView.vue';
import PersonalInfoView from './views/PersonalInfoView.vue';
import SelectPlanView from './views/SelectPlanView.vue';
import ThankYouView from './views/ThankYouView.vue';

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
  <div class="mobile:bg-sidebar-mobile bg-cover bg-no-repeat mobile:h-[172px]">
    <nav class="text-center text-white pt-8">
      <Sidebar page="1" :class="page == 1 ? 'bg-blue-light text-blue-marine' : ''" @click="() => { page = 1 }"/>
      <Sidebar page="2" :class="page == 2 ? 'bg-blue-light text-blue-marine' : ''" @click="() => { page = 2 }"/>
      <Sidebar page="3" :class="page == 3 ? 'bg-blue-light text-blue-marine' : ''" @click="() => { page = 3 }"/>
      <Sidebar page="4" :class="page >= 4 ? 'bg-blue-light text-blue-marine' : ''" @click="() => { page = 4 }"/>
    </nav>
  </div>

  <PersonalInfoView v-if="page == 1" />
  <SelectPlanView v-if="page == 2" v-model:yearly="yearly" />
  <AddOnsView v-if="page == 3" :yearly="yearly" />
  <FinishingUpView v-if="page == 4" :yearly="yearly" v-model:page="page"/>
  <ThankYouView v-if="page == 5" />

  <div class="grid grid-cols-2 bg-white fixed bottom-0 w-full font-semibold" v-if="page < 5">
    <button v-show="page > 1" @click="() => { page-- }" class="text-gray-cool m-4 justify-self-start">Go back</button>
    <button v-if="page == 4" @click="() => { page++ }" class="bg-blue-purplish rounded text-white px-4 py-2 m-4 justify-self-end">Confirm</button>
    <button v-else @click="() => { page++ }" class="bg-blue-marine rounded text-white px-4 py-2 m-4 justify-self-end col-start-2">Next Step</button>
  </div>

</template>