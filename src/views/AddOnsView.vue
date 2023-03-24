<script setup>
import Card from '../components/Card.vue';
</script>

<template>
    <Card>
        <template #title>Pick add-ons</template>
        <template #description>Please provide your name, email address and phone number.</template>
        <template #body>
            <label class="font-semibold flex items-center border border-gray-light hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="peer accent-blue-purplish w-4 h-4" aria-label="arcade checkbox">
                <div class="ml-4 flex items-center justify-between w-full">
                    <div>
                    Online service
                    <p class="text-gray-cool text-sm font-medium">Access to multiplayer games</p>
                    </div>
                    <div class="text-blue-purplish text-xs font-medium ">
                        <p v-if="!checked">+$1/mo</p>
                        <p v-else>+$10/yr</p>
                    </div>
                </div>
            </label>
            <label class="font-semibold flex items-center border border-gray-light hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="peer accent-blue-purplish w-4 h-4" aria-label="arcade checkbox">
                <div class="ml-4 flex items-center justify-between w-full">
                    <div>
                        Larger storage
                        <p class="text-gray-cool text-sm font-medium">Extra 1TB of cloud save</p>
                    </div>
                    <div class="text-blue-purplish text-xs font-medium">
                        <p v-if="!checked">+$2/mo</p>
                        <p v-else>+$20/yr</p>
                    </div>
                </div>
            </label>
            <label class="font-semibold flex items-center border border-gray-light hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="peer accent-blue-purplish w-4 h-4" aria-label="arcade checkbox">
                <div class="ml-4 flex items-center justify-between w-full">
                    <div>
                        Customizable profile
                        <p class="text-gray-cool text-sm font-medium">Custom theme on your profile</p>
                    </div>
                    <div class="text-blue-purplish text-xs font-medium">
                        <p v-if="!checked">+$2/mo</p>
                        <p v-else>+$20/yr</p>
                    </div>
                </div>
            </label>
          </template>
    </Card>
</template>