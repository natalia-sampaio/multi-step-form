<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
            <div class="bg-magnolia rounded-md p-4">
                <div class="flex justify-between border-b border-gray-light pb-2">
                    <div>
                        Arcade (<span v-if="!yearly">Monthly</span><span v-else>Yearly</span>)                        
                        <div class="text-gray-cool underline font-medium"><a href="#">Change</a></div>                        
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
</template>