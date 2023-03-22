<script setup>
defineProps({
    page: String,
    isCurrentPage: false
})
</script>

<template>
    <button :class="isCurrentPage ? 'bg-blue-light text-blue-marine' : 'w-10 h-10 border border-white m-2 rounded-full font-bold'">{{ page }}</button>
</template>