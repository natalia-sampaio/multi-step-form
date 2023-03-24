<script setup>
import Card from '../components/Card.vue';
import FormItem from '../components/FormItem.vue';
</script>

<template>
  <Card>
    <template #title>Personal info</template>
    <template #description>Please provide your name, email address and phone number.</template>
    <template #body>
      <FormItem>
        <template #label>
          Name
          <input type="text" placeholder="e.g. Casimiro Silva" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="name input" required>
        </template>
      </FormItem>
      <FormItem>
        <template #label>
          Email Address
          <input type="email" placeholder="e.g. casimiro.silva@lorem.ip" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="email input" required>
        </template>
      </FormItem>
      <FormItem>
        <template #label>
          Phone Number
          <input type="phone" placeholder="e.g. +12 345 678 910" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="phone number input" required>
        </template>
      </FormItem>
      </template>
  </Card>
</template>
