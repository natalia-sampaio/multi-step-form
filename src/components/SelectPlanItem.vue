<script setup>
defineProps({
    title: "",
    peerName: "",
    peerDefinition: ""
})
</script>

<template>
    <input :id="`${title}`" name="plan" type="radio" :class="`sr-only ` + peerName" :aria-label="`radio for ${title}`">
    <label :for="`${title}`" :class="`flex items-center border border-gray-light hover:cursor-pointer rounded-md p-3 my-2 lg:grid lg:w-1/4 ` + peerDefinition">
        <slot></slot>
        <div class="ml-4 lg:ml-0 lg:mt-6">
            <h3 class="capitalize">{{ title }}</h3>
            <p class="text-gray-cool font-normal"><slot name="monthlyPrice"></slot></p>
            <p class="text-gray-cool font-normal"><slot name="yearlyPrice"></slot></p>
        </div>
    </label>
</template>