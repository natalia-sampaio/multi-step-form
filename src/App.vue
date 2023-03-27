<script setup>
import Sidebar from './components/Sidebar.vue'
import IconSidebar from './components/icons/IconSidebar.vue';

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
    <div class="flex justify-center text-white pt-8">
      <IconSidebar page="1" :class="$route.name === 'page1' ? 'bg-blue-light text-blue-marine' : ''"/>
      <IconSidebar page="2" :class="$route.name === 'page2' ? 'bg-blue-light text-blue-marine' : ''"/>
      <IconSidebar page="3" :class="$route.name === 'page3' ? 'bg-blue-light text-blue-marine' : ''"/>
      <IconSidebar page="4" :class="$route.name === 'page4' ? 'bg-blue-light text-blue-marine' : $route.name === 'page5' ? 'bg-blue-light text-blue-marine' : ''"/>
    </div>
  </div>
  
  <div class="hidden lg:block rounded-tl-xl rounded-bl-xl bg-white p-4 h-3/4">
    <div class="bg-sidebar-desktop rounded-xl flex flex-col bg-cover w-full h-full pt-6 pl-6">
        <Sidebar title="Step 1" description="Your Info">
        <IconSidebar page="1" :extraClasses="$route.name === 'page1' ? ' bg-blue-light text-blue-marine' : ' text-white'"/>
        </Sidebar>
        <Sidebar title="Step 2" description="Select Plan">
          <IconSidebar page="2" :extraClasses="$route.name === 'page2' ? ' bg-blue-light text-blue-marine' : ' text-white'"/>
        </Sidebar>
        <Sidebar title="Step 3" description="Add-Ons">
          <IconSidebar page="3" :extraClasses="$route.name === 'page3' ? ' bg-blue-light text-blue-marine' : ' text-white'"/>
        </Sidebar>
        <Sidebar title="Step 4" description="Summary">
          <IconSidebar page="4" :extraClasses="$route.name === 'page4' ? ' bg-blue-light text-blue-marine' : $route.name === 'page5' ? ' bg-blue-light text-blue-marine' : ' text-white'"/>
        </Sidebar>
    </div>
  </div>

  <RouterView v-model:yearly="yearly" :yearly="yearly" />
</template>