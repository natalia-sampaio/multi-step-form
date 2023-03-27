<script setup>
defineProps({
    title: "",
    description: "",
    monthlyPrice: "",
    yearlyPrice: "",
    groupName: ""
})
</script>

<template>
    <div class="flex items-center">
        <input id="checkbox" type="checkbox" class="accent-blue-purplish mr-[-2rem] ml-[2rem] lg:mr-[-3rem] lg:ml-[3rem] w-4 h-4 lg:w-5 lg:h-5 peer z-10" :aria-label="`checkbox for ` + title">
        <label for="checkbox" class="pl-14 lg:pl-20 p-3 lg:p-4 my-2 flex items-center justify-between w-full peer-checked:bg-magnolia peer-checked:border-blue-purplish border border-gray-light hover:cursor-pointer rounded-md">
            <div>
                {{ title }}
                <p class="text-gray-cool text-sm font-medium">{{ description }}</p>
            </div>
            <div class="text-blue-purplish text-xs font-medium ">
                <p><slot name="monthlyPrice"></slot></p>
                <p><slot name="yearlyPrice"></slot></p>
            </div>
        </label>
    </div>
</template>