<script setup>
import { RouterLink } from 'vue-router';
import Card from '../components/Card.vue';
</script>

<script>
export default {
    props: {
        yearly: Boolean
    }
}
</script>

<template>
    <Card>
        <template #title>Pick add-ons</template>
        <template #description>Please provide your name, email address and phone number.</template>
        <template #body>
            <label class="flex items-center border border-gray-light hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="peer accent-blue-purplish w-4 h-4" aria-label="arcade checkbox">
                <div class="ml-4 flex items-center justify-between w-full">
                    <div>
                    Online service
                    <p class="text-gray-cool text-sm font-medium">Access to multiplayer games</p>
                    </div>
                    <div class="text-blue-purplish text-xs font-medium ">
                        <p v-if="!yearly">+$1/mo</p>
                        <p v-else>+$10/yr</p>
                    </div>
                </div>
            </label>
            <label class="flex items-center border border-gray-light hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="peer accent-blue-purplish w-4 h-4" aria-label="arcade checkbox">
                <div class="ml-4 flex items-center justify-between w-full">
                    <div>
                        Larger storage
                        <p class="text-gray-cool text-sm font-medium">Extra 1TB of cloud save</p>
                    </div>
                    <div class="text-blue-purplish text-xs font-medium">
                        <p v-if="!yearly">+$2/mo</p>
                        <p v-else>+$20/yr</p>
                    </div>
                </div>
            </label>
            <label class="flex items-center border border-gray-light hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="peer accent-blue-purplish w-4 h-4" aria-label="arcade checkbox">
                <div class="ml-4 flex items-center justify-between w-full">
                    <div>
                        Customizable profile
                        <p class="text-gray-cool text-sm font-medium">Custom theme on your profile</p>
                    </div>
                    <div class="text-blue-purplish text-xs font-medium">
                        <p v-if="!yearly">+$2/mo</p>
                        <p v-else>+$20/yr</p>
                    </div>
                </div>
            </label>
          </template>
    </Card>
    <div class="grid grid-cols-2 items-center bg-white fixed bottom-0 w-full font-semibold">
        <RouterLink to="/select-plan" class="justify-self-start">
        <button class="text-gray-cool m-4">Go back</button></RouterLink>
        <RouterLink to="/finishing-up" class="justify-self-end col-start-2">
        <button class="bg-blue-marine rounded text-white px-4 py-2 m-4">Next Step</button>
        </RouterLink>
      </div>
</template>