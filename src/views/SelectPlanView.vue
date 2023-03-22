<script setup>
import Card from '../components/Card.vue';
import IconArcade from '../components/icons/IconArcade.vue';
import IconAdvanced from '../components/icons/IconAdvanced.vue';
import IconPro from '../components/icons/IconPro.vue';
</script>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
} 
</script>

<template>
    <Card class="mt-[-4rem]">
        <template #title>Select your plan</template>
        <template #description>You have the option of monthly or yearly billing.</template>
        <template #body>
            <label class="font-semibold flex items-center border border-gray-light peer-checked:bg-blue-700 hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="hidden peer" aria-label="arcade checkbox">
                <IconArcade />
                <div class="ml-4">
                    Arcade
                    <p v-if="!checked" class="text-gray-cool font-normal">$9/mo</p>
                    <p v-else class="text-gray-cool font-normal">$90/yr</p>
                </div>
            </label>
            <label class="font-semibold flex items-center border border-gray-light peer-checked:bg-blue-700 hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="hidden peer" aria-label="arcade checkbox">
                <IconAdvanced />
                <div class="ml-4">
                    Advanced
                    <p v-if="!checked" class="text-gray-cool font-normal">$12/mo</p>
                        <p v-else class="text-gray-cool font-normal">$120/yr</p>
                </div>
            </label>
            <label class="font-semibold flex items-center border border-gray-light peer-checked:bg-blue-700 hover:cursor-pointer rounded-md p-3 my-2">
                <input type="checkbox" class="hidden peer" aria-label="arcade checkbox">
                <IconPro />
                <div class="ml-4">
                    Pro
                    <p v-if="!checked" class="text-gray-cool font-normal">$15/mo</p>
                    <p v-else class="text-gray-cool font-normal">$150/yr</p>
                </div>
            </label>

            <div class="flex justify-center items-center bg-blue-light p-3 rounded-md font-semibold mt-6">
            <span class="mr-3">Monthly</span>
            <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" v-model="checked">
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-marine peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3.5px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
            </label>
            <span class="ml-3 text-gray-cool">Yearly</span>
            </div>
        </template>
    </Card>
</template>