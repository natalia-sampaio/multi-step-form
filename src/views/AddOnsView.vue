<script setup>
import { useRouter,  } from 'vue-router';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

const router = useRouter();

const nextStep = () => {
    router.push('/finishing-up')
}

const goBack = () => {
    router.push('/select-plan')
}
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
        <template #buttons>
            <button class="text-gray-cool m-4 justify-self-start" @click="goBack">Go back</button>
            <Button :extraClasses="'bg-blue-marine justify-self-end'" :name="'Next Step'" @click="nextStep"/>
        </template>
    </Card>
</template>