<script setup>
import Card from '../components/Card.vue';
import IconArcade from '../components/icons/IconArcade.vue';
import IconAdvanced from '../components/icons/IconAdvanced.vue';
import IconPro from '../components/icons/IconPro.vue';
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
        <template #title>Select your plan</template>
        <template #description>You have the option of monthly or yearly billing.</template>
        <template #body>
            <label class="flex items-center border border-gray-light peer-checked:bg-blue-700 hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="hidden peer" aria-label="arcade checkbox">
                <IconArcade />
                <div class="ml-4">
                    Arcade
                    <p v-if="!yearly" class="text-gray-cool font-normal">$9/mo</p>
                    <p v-else class="text-gray-cool font-normal">$90/yr</p>
                </div>
            </label>
            <label class="flex items-center border border-gray-light peer-checked:bg-blue-700 hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="hidden peer" aria-label="arcade checkbox">
                <IconAdvanced />
                <div class="ml-4">
                    Advanced
                    <p v-if="!yearly" class="text-gray-cool font-normal">$12/mo</p>
                    <p v-else class="text-gray-cool font-normal">$120/yr</p>
                </div>
            </label>
            <label class="flex items-center border border-gray-light peer-checked:bg-blue-700 hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="hidden peer" aria-label="arcade checkbox">
                <IconPro />
                <div class="ml-4">
                    Pro
                    <p v-if="!yearly" class="text-gray-cool font-normal">$15/mo</p>
                    <p v-else class="text-gray-cool font-normal">$150/yr</p>
                </div>
            </label>

            <div class="flex justify-center items-center bg-alabaster p-3 rounded-md mt-6">
                <span class="mr-3">Monthly</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" :checked="yearly" @change="$emit('update:yearly', $event.target.checked)" aria-label="arcade checkbox">
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-marine peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3.5px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                </label>
                <span class="ml-3 text-gray-cool">Yearly</span>
            </div>
        </template>
    </Card>
</template>