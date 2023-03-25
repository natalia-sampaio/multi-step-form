<script setup>
defineProps({
    title: String,
    description: String
})
</script>

<template>
    <div class="text-white flex uppercase text-sm m-2">
        <slot></slot>
        <div class="grid pl-2 pr-28">
            <span class="self-end">{{ title }}</span>
            <span class="font-bold">{{ description }}</span>
        </div>
    </div>
</template>