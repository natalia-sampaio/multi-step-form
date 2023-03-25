<script setup>
defineProps({
    placeholder: "",
    ariaLabel: "",
    type: "",
    modelValue: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <input :type="type" :placeholder="placeholder" :aria-label="ariaLabel" class="border border-gray-light p-0 rounded font-semibold text-base hover:cursor-pointer focus:border-blue-purplish focus:outline-none py-2 pl-4 lg:py-3 lg:rounded-md" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>