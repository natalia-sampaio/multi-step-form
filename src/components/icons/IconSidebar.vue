<script setup>
defineProps({
    page: String
})
</script>

<template>
    <div class="w-10 h-10 border text-white border-white m-2 rounded-full font-bold flex items-center justify-center">{{ page }}</div>
</template>