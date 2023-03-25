<script setup>
import Card from '../components/Card.vue';
import FormItem from '../components/FormItem.vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email, numeric } from '@vuelidate/validators'
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

const formData = reactive({
  name: "",
  email: "",
  phoneNumber: ""
});

const rules = computed(() => {
  return {
    name: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    phoneNumber: {
      required,
      numeric
    }
  }
});

const v$ = useVuelidate(rules, formData);

const router = useRouter();

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    router.push('/select-plan')
  } else {
    router.push('/')
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
          <div class="flex justify-between">
            <span>Name</span>
            <span v-for="error in v$.name.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</span>
          </div>
          <input type="text" placeholder="e.g. Casimiro Silva" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="name input" v-model="formData.name">
        </template>
      </FormItem>
      <FormItem>
        <template #label>
          <div class="flex justify-between">
            <span>Email Address</span>
            <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</span>
          </div>
          <input type="email" placeholder="e.g. casimiro.silva@lorem.ip" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="email input" v-model="formData.email">
        </template>
      </FormItem>
      <FormItem>
        <template #label>
          <div class="flex justify-between">
            <span>Phone Number</span>
            <span v-for="error in v$.phoneNumber.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</span>
          </div>
          <input type="phone" placeholder="e.g. +12 345 678 910" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4" aria-label="phone number input" v-model="formData.phoneNumber">
        </template>
      </FormItem>
      </template>
  </Card>

  <div class="grid grid-cols-2 bg-white fixed bottom-0 w-full font-semibold">
    <button class="focus:animate-button_shake justify-self-end col-start-2 bg-blue-marine rounded text-white px-4 py-2 m-4 " @click="submitForm">Next Step</button>
  </div>
</template>
