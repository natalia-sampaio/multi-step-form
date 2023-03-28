<script setup>
defineProps({
    planId: 0,
    title: "",
    peerName: "",
    peerDefinition: "",
    defaultSelection: ""
})
</script>

<template>
    <input :id="`${title}`" name="plan" type="radio" :class="`sr-only` + peerName" :aria-label="`radio for ${title}`" checked @change="$event => $event.target.checked ? $emit('selected-plan', planId) : ''">
    <label :for="`${title}`" :class="`flex items-center border border-gray-light hover:cursor-pointer rounded-md p-4 my-2 lg:grid lg:w-[30%] ` + peerDefinition">
        <slot></slot>
        <div class="ml-4 lg:ml-0 lg:mt-8">
            <h3 class="capitalize">{{ title }}</h3>
            <p class="text-gray-cool font-normal"><slot name="monthlyPrice"></slot></p>
            <p class="text-gray-cool font-normal"><slot name="yearlyPrice"></slot></p>
        </div>
    </label>
</template>