<script setup>
defineProps({
    page: String,
    extraClasses: ""
})
</script>

<template>
    <div :class="`w-10 h-10 border border-white m-2 rounded-full font-bold flex items-center justify-center` + extraClasses">{{ page }}</div>
</template>