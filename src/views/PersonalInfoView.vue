<script setup>
import Card from '../components/Card.vue';
import FormItem from '../components/FormItem.vue';
</script>

<script>
export default {
  props: {
  },
  data() {
    return {
      name: '',
      email: '',
      phoneNumber: ''
    }
  },
  methods:{
    
  }
}
</script>

<template>
  <Card>
    <template #title>Personal info</template>
    <template #description>Please provide your name, email address and phone number.</template>
    <template #body>
      <FormItem>
        <template #label>
          <span>Name</span><span></span>
          <input type="text" placeholder="e.g. Casimiro Silva" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="name input" required v-model="name">
        </template>
      </FormItem>
      <FormItem>
        <template #label>
          Email Address
          <input type="email" placeholder="e.g. casimiro.silva@lorem.ip" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="email input" required v-model="email">
        </template>
      </FormItem>
      <FormItem>
        <template #label>
          Phone Number
          <input type="phone" placeholder="e.g. +12 345 678 910" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="phone number input" required v-model="phoneNumber">
        </template>
      </FormItem>
      </template>
  </Card>

  <div class="grid grid-cols-2 bg-white fixed bottom-0 w-full font-semibold">
    <RouterLink to="/select-plan" class="justify-self-end col-start-2">
      <button class="bg-blue-marine rounded text-white px-4 py-2 m-4">Next Step</button>
    </RouterLink>
  </div>
</template>
