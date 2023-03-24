<script setup>
import Card from '../components/Card.vue';
</script>

<script>
export default {
    props: {
        yearly: Boolean,
        page: Number
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
    <div class="grid grid-cols-2 bg-white fixed bottom-0 w-full font-semibold">
        <button @click="$emit('update:page', 2)" class="text-gray-cool m-4 justify-self-start">Go back</button>
        <button @click="$emit('update:page', 4)" class="bg-blue-marine rounded text-white px-4 py-2 m-4 justify-self-end col-start-2">Next Step</button>
      </div>
</template>