<script setup>
defineProps({
    name: "",
    extraClasses: ""
})
</script>

<template>
    <button :class="'justify-self-end col-start-2 rounded text-white px-4 py-2 m-4 lg:mr-0 lg:rounded-md' + ' ' + extraClasses">{{ name }}</button>
</template>