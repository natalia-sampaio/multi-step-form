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
            yearly: false
        };
    }
}
</script>

<template>
  <div class="mobile:bg-sidebar-mobile bg-cover bg-no-repeat mobile:h-[172px]">
    <nav class="text-center text-white pt-8">
      <Sidebar page="1" :class="$route.name == 'page1' ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="2" :class="$route.name == 'page2' ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="3" :class="$route.name == 'page3' ? 'bg-blue-light text-blue-marine' : ''"/>
      <Sidebar page="4" :class="$route.name == 'page4' || 'page5' ? 'bg-blue-light text-blue-marine' : ''"/>
    </nav>
  </div>

  <RouterView v-model:yearly="yearly" :yearly="yearly" />

</template>