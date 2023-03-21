<script setup>
defineProps({
    page: String,
    isCurrentPage: false
})
</script>

<template>
    <button :isCurrentPage="isCurrentPage" class="w-10 h-10 border-2 border-white m-2 rounded-full">{{ page }}</button>
</template>