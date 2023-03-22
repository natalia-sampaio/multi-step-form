<script setup>
defineProps({
    page: String,
    isCurrentPage: false
})
</script>

<template>
    <button :isCurrentPage="isCurrentPage" class="w-10 h-10 border border-white m-2 rounded-full font-bold">{{ page }}</button>
</template>