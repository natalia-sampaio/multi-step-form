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
        <template #title>Finishing up</template>
        <template #description>Double-check everything looks OK before confirming.</template>
        <template #body>
            <div class="bg-alabaster rounded-md p-4">
                <div class="flex justify-between border-b border-gray-light pb-2">
                    <div class="grid place-items-start">
                        <span>Arcade (<span v-if="!yearly">Monthly</span><span v-else>Yearly</span>)</span>
                        <RouterLink to="/select-plan"><button class="text-gray-cool underline font-medium">Change</button></RouterLink>                  
                    </div>
                    <div>
                        <span v-if="!yearly">$9/mo</span>
                        <span v-else>$90/yr</span>
                    </div>
                </div>
                <div class="flex justify-between font-medium py-2">
                    <span class="text-gray-cool">Online service</span>
                    <div>
                        <span v-if="!yearly">+$1/mo</span>
                        <span v-else>+$10/yr</span>
                    </div>
                </div>
                <div class="flex justify-between font-medium">
                    <span class="text-gray-cool">Larger storage</span>
                    <div>
                        <span v-if="!yearly">+$2/mo</span>
                        <span v-else>+$20/yr</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex justify-between p-4">
                    <span class="text-gray-cool">Total (<span v-if="!yearly">per month</span><span v-else>per year</span>)</span>
                    <div class="text-blue-purplish">
                        <span v-if="!yearly">+$12/mo</span>
                        <span v-else>+$120/yr</span>
                    </div>
                </div>
            </div>
        </template>
    </Card>
    <div class="grid grid-cols-2 items-center bg-white fixed bottom-0 w-full font-semibold">
        <RouterLink to="/add-ons" class="justify-self-start">
            <button class="text-gray-cool m-4">Go back</button>
        </RouterLink>
        <RouterLink to="/thank-you" class="justify-self-end">
            <button class="bg-blue-purplish rounded text-white px-4 py-2 m-4">Confirm</button>
        </RouterLink>
    </div>
</template>