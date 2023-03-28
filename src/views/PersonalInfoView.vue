<script setup>
import Card from '../components/Card.vue';
import FormItem from '../components/FormItem.vue';
import BaseInput from '../components/BaseInput.vue';
import Button from '../components/Button.vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email, numeric } from '@vuelidate/validators'
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePlanStore } from '@/stores/plan';
import { ref } from 'vue';

const store = usePlanStore();

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
const warn = ref(false);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    store.$patch({
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber
    })
    router.push('/select-plan')
  } else {
    warn.value = true;
    setTimeout(() => {
      warn.value = false
    }, 1500)
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
            <template #label>Name</template>
            <template #error v-for="error in v$.name.$errors" :key="error.$uid" >{{ error.$message }}</template>
            <BaseInput type="text" placeholder="e.g. Casimiro Silva" aria-label="name input" v-model="formData.name" />
      </FormItem>
      <FormItem>
          <template #label>Email Address</template>
          <template #error v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</template>
          <BaseInput type="email" placeholder="e.g. casimiro.silva@lorem.ip" aria-label="email input" v-model="formData.email" />
      </FormItem>
      <FormItem>
            <template #label>Phone Number</template>
            <template #error v-for="error in v$.phoneNumber.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</template>
            <BaseInput type="phone" placeholder="e.g. +12 345 678 910" aria-label="phone number input" v-model="formData.phoneNumber" />
      </FormItem>
      </template>
      <template #buttons>
          <Button @click="submitForm" :extraClasses="'bg-blue-marine'" :class="{ shake: warn }" :name="'Next Step'"/>
      </template>
    </Card>
</template>
<style scoped> 
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>